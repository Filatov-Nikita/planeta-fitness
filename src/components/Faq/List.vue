<template>
  <div class="list">
    <ListItem
      class="list-item"
      v-for="item in items"
      v-bind="item"
    />
  </div>
</template>

<script setup>
  import ListItem from './ListItem.vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    --col: 50%;
    --gap-x: 40px;
    --gap-y: 20px;
    margin-top: calc(var(--gap-y) * -1);
    margin-left: calc(var(--gap-x) * -1);

    @include md {
      --col: 100%;
    }

    @include sm {
      --gap-y: 10px;
    }
  }

  .list-item {
    width: calc(var(--col) - var(--gap-x));
    margin-top: var(--gap-y);
    margin-left: var(--gap-x);
  }
</style>
