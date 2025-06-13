<template>
  <div class="list-block">
    <div class="list-wrap">
      <ul class="list scroll-x">
        <li
          class="item"
          v-for="item in items"
          :key="item.id"
        >
          <button class="item-btn" type="button" @click="$emit('change:category', item)">
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });

  defineEmits([ 'change:category' ]);
</script>

<style scoped lang="scss">
  .list-block {
    border-radius: 50px;
    background: #313634;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 100%;
      padding-top: 140%;
    }
  }

  .list-wrap {
    padding: 40px;
    padding-right: 24px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .list {
    padding-right: 16px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .item {
    & + & {
      margin-top: 12px;
    }
  }

  .item-btn {
    display: block;
    width: 100%;
    padding: 10px 0;
    color: #DDDDDD;
    text-align: left;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: var(--lett-sp-sm);
    transition: transform 150ms;

    &:hover {
      color: var(--color-primary);
      transform: translateX(10px);
    }
  }
</style>
