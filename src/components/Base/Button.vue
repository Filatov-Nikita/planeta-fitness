<template>
  <button
    class="base-btn"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  defineProps({
    type: {
      default: 'button',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
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
      background: var(--color-secondary-hover);
    }

    &:active {
      background: var(--color-secondary-active);
    }

    &:disabled {
      background: var(--color-gray-300);
      color: var(--color-gray-700);
      cursor: default;
    }
  }
</style>
