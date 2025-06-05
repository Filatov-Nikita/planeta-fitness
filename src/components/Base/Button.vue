<template>
  <component
    class="base-btn"
    :is="tag"
    :type="tag === 'button' ? type : undefined"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  defineProps({
    tag: {
      default: 'button',
      type: String,
    },
    type: {
      default: 'button',
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .base-btn {
    display: inline-block;
    padding: 18px 30px;
    border-radius: 30px;
    background: var(--color-secondary);
    letter-spacing: var(--lett-sp-sm);
    color: #000000;
    font-size: 20px;
    line-height: 1;
    font-weight: 400;
    text-align: center;

    &:hover {
      background: #eadb87;
    }

    &:active {
      background: #c9bc73;
    }
  }
</style>
