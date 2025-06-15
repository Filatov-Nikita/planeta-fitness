<template>
  <div class="tape">
    <div class="wrapper">
      <div class="items">
        <div
          class="item"
          v-for="i in 4"
        >
          <span>с июня по сентябрь</span>
          <span class="dot"></span>
          <span>будни в 20:30</span>
          <span class="dot"></span>
          <span>выходные в 11:00 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .tape {
    --anim-start: -761px;
    overflow: hidden;
    padding: 30px 0;
    font-size: 26px;
    line-height: 1;
    font-weight: 400;
    letter-spacing: var(--lett-sp-sm);
    background: var(--color-primary);
    color: var(--color-text-dark);

    @include sm {
      --anim-start: -460px;
      padding: 20px 0;
      font-size: 16px;
    }
  }

  .items {
    display: flex;
    column-gap: 50px;
    transform: translateX(var(--anim-start));
    animation-name: move1;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @include sm {
      column-gap: 25px;
    }
  }

  .item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    column-gap: 20px;

    @include sm {
      column-gap: 12px;
    }
  }

  .dot {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-text-dark);

    @include sm {
      width: 6px;
      height: 6px;
    }
  }

  @keyframes move1 {
    0% {
      transform: translateX(var(--anim-start));
    }

    100% {
      transform: translateX(0px);
    }
  }
</style>
