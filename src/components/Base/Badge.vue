<template>
  <div class="badge">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .badge {
    border: 1px solid #2E2E2E;
    border-radius: 30px;
    padding: 14px 20px;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1;
    letter-spacing: var(--lett-sp-sm);
    color: var(--color-text-dark);
    text-align: center;
  }
</style>
