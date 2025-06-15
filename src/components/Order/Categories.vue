<template>
  <div class="cats">
    <div class="items">
      <BaseTab
        class="item-one"
        key="all"
        :active="activeItem === null"
        text="Все"
        @click="onClick(null)"
      />
      <BaseTab
        class="item-one"
        v-for="item in items"
        :key="item.id"
        :active="item.id === activeItem?.id"
        :text="item.title"
        :color="item.color"
        @click="onClick(item)"
      />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    items: {
      required: true,
      type: Array,
    },
    activeItem: {
      default: undefined,
      type: Object,
    }
  });

  const emit = defineEmits(['update:activeItem']);

  function onClick(item) {
    emit('update:activeItem', item);
  }
</script>

<style scoped lang="scss">
  $b_lg: 1200px;

  .cats {
    @include screen($b_lg) {
      overflow-y: hidden;
      padding-bottom: 8px;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 15px;

    @include screen($b_lg) {
      flex-wrap: nowrap;
    }
  }

  .item-one {
    white-space: nowrap;

    &.tab {
      @include sm {
        font-size: 14px;
        padding: 16px;
      }
    }
  }
</style>
