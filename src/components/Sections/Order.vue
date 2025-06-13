<template>
  <section id="order" class="section-order" v-if="data && data.results">
    <div class="wrapper">
      <h2 class="h2 section-order__title">Запишись на удобное время</h2>
      <div class="section-order__grid">
        <div class="section-order__left">
          <Calendar v-model="orderDate" :disabledDates="disabledDates" :attributes="calendarAttrs" @change:event="activeEvent = $event" />
        </div>
        <div class="section-order__right">
          <div class="working-time">
            <BaseBadge class="working-time__badge">Будни в 20:30</BaseBadge>
            <BaseBadge class="working-time__badge">Выходные в 11:00</BaseBadge>
          </div>
          <Categories :items="categories" v-model:activeItem="activeCategory" />
          <Transition
            enter-active-class="animate__animated animate__zoomIn anim-fast"
            leave-active-class="animate__animated animate__zoomOut anim-fast"
          >
            <ActiveEvent
              class="section-order__event"
              v-if="activeEvent && orderDate"
              :event="activeEvent"
            >
              <template #actions>
                <BaseButton
                  class="section-order__btn"
                  :disabled="!canOrder"
                  @click="createOrderAction"
                >
                  Записаться
                </BaseButton>
              </template>
            </ActiveEvent>
          </Transition>
        </div>
      </div>
    </div>
    <SuccessModal
      v-model:showed="successModal"
      :event="activeEvent"
      @finish="finish"
    />
    <BaseInnerLoading :showed="loading" />
  </section>
</template>

<script setup>
  import Calendar from '@/components/Order/Calendar.vue';
  import Categories from '@/components/Order/Categories.vue';
  import ActiveEvent from '@/components/Order/ActiveEvent.vue';
  import useRequest from '@/composables/useRequest';
  import useAuth from '@/composables/useAuth';
  import * as CategoriesRepo from '@/http/events';
  import * as OrderRepo from '@/http/order';
  import { computed, ref, watch } from 'vue';
  import { dateToIso } from '@/helpers/dates';
  import SuccessModal from '../Order/SuccessModal.vue';
  import { useNotification } from '@kyvg/vue3-notification';
  import useForm from '@/composables/useForm';
  import useAppGrid from '@/composables/useAppGrid';

  const grid = useAppGrid();

  const { data, loading, send } = await useRequest(CategoriesRepo.all, {
    errorMessage: 'Не удалось загрузить данные!'
  });

  const orderDate = ref('');
  const activeEvent = ref(null);
  const activeCategory = ref(null);
  const categories = computed(() => data.value?.results ?? []);

  watch(activeCategory, () => {
    orderDate.value = '';
    activeEvent.value = null;
  });

  const disabledDates = computed(() => {
    if(!data.value?.results) return [ { start: null, end: null } ];

    function isDisabled(event, _opts) {
      const dt1 = event.start_date.split(' ')[0];
      const dt2 = dateToIso(_opts.date);
      return dt1 !== dt2;
    }

    const start = new Date();
    start.setDate(start.getDate() - 1);

    function makeEverydayPattern(onFn) {
      return [
        {
          start,
          repeat: {
            every: 'day',
            on: onFn,
          }
        }
      ]
    }

    if(!activeCategory.value) {
      return makeEverydayPattern((_opts) => {
        return data.value.results
          .every(item => {
            return item.events.every(event => isDisabled(event, _opts));
          });
      });
    }

    return makeEverydayPattern((_opts) => {
      return activeCategory.value.events
        .every(event => isDisabled(event, _opts));
    });
  });

  const calendarAttrs = computed(() => {
    if(!data.value?.results) return [];

    function makeHighlight(color) {
      return {
        fillMode: 'outline',
        style: {
          borderColor: color,
        },
      };
    }

    if(!activeCategory.value) {
      return data.value.results.reduce((acc, item) => {
        item.events.forEach(event => {
          acc.push({
            dates: new Date(event.start_date),
            highlight: orderDate.value === '' ? makeHighlight(item.color) : undefined,
            customData: { ...event, name: item.title },
          });
        });

        return acc;
      }, []);
    }

    return activeCategory.value.events.map(event => {
      return {
        dates: new Date(event.start_date),
        highlight: makeHighlight(activeCategory.value.color),
        customData: { ...event, name: activeCategory.value.title },
      }
    });
  });

  const { notify } = useNotification();
  const successModal = ref(false);
  const auth = useAuth();

  function orderFn(_form, { event: user }) {
    return OrderRepo.create(user.api_token, {
      event_id: activeEvent.value?.id,
      user_id: user.id,
    });
  }

  function successFn(res) {
    if(!res.data.success) {
      notify({
        type: 'error',
        text: res.data.error,
      });
    } else {
      successModal.value = true;
    }
  }

  const { pending: orderPending, onSubmit: createOrder } = useForm(orderFn, {}, successFn);

  const createOrderAction = auth.addAction(createOrder);

  const canOrder = computed(() => {
    return activeEvent.value && !orderPending.value;
  });

  function finish() {
    orderDate.value = '';
    activeCategory.value = null;
    activeEvent.value = null;
    send();
  }
</script>

<style scoped lang="scss">
  .section-order {
    &__title {
      text-align: center;
      margin-bottom: 50px;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      column-gap: 40px;
    }

    &__left {
      width: calc(45% - 20px);
    }

    &__right {
      width: calc(55% - 20px);
    }

    &__event {
      margin-top: 40px;
    }

    &__btn {
      width: 100%;
      max-width: 250px;
    }
  }

  .working-time {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;

    &__badge {
      width: 100%;
      max-width: 220px;
    }
  }

  .anim-fast {
    --animate-duration: 300ms;
  }
</style>
