<template>
  <div class="event">
    <div class="head">
      <div class="name">{{ event.name }}</div>
      <div class="count">Свободно мест: {{ count }}</div>
    </div>
    <div class="date-time">{{ dateTime }}</div>
    <slot name="actions"></slot>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    event: {
      required: true,
      type: Object,
    },
  });

  const dateTime = computed(() => {
    const [ startDate, startTime ] = props.event.start_date.split(' ');
    const [ _endDate, endTime ] = props.event.end_date.split(' ');
    const dateStr = new Date(startDate).toLocaleDateString('ru-RU', {
      month: 'long',
      day: '2-digit',
    });
    return `${ dateStr } ${startTime.substring(0, 5)}-${endTime.substring(0, 5)}`;
  });

  const count = computed(() => {
    return 100 - props.event.users_count;
  });
</script>

<style scoped lang="scss">
  .event {
    max-width: 500px;
    padding: 30px 24px;
    border-radius: 30px;
    background: var(--color-white);
    box-shadow: 0 3px 20px 0 rgba(168, 168, 168, 0.14);
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .name {
    max-width: 240px;
    width: 100%;
    font-weight: 900;
    font-size: 22px;
    line-height: 1;
    letter-spacing: -0.01em;
  }

  .count {
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.01em;
    color: #7D7D7D;
  }

  .date-time {
    margin-bottom: 30px;
    letter-spacing: -0.01em;
    font-size: 18px;
    line-height: 1;
    font-weight: 400;
  }
</style>
