<template>
  <div class="main-block">
    <div class="wrapper">
      <div class="banner">
        <picture>
          <source media="(max-width: 767.9px)" width="750" height="1080" srcset="@/assets/images/banner-sm.jpg" />
          <source media="(min-width: 768px)" width="2011" height="1131" srcset="@/assets/images/banner.jpg" />
          <img class="banner__img" src="@/assets/images/banner.jpg" width="2011" height="1131" alt="Фитнес на Крыше">
        </picture>
        <div class="order-wrap">
          <BaseButton class="order" @click="$order.show">Записаться</BaseButton>
        </div>
      </div>
      <h1 class="title" v-if="grid.lg">
        Каждый день на крыше Планеты бесплатные занятия вместе с F-team
      </h1>
      <h1 class="title" v-else>
        Каждый день бесплатные занятия вместе с F-team
      </h1>
    </div>
  </div>
</template>

<script setup>
  import useAppGrid from '@/composables/useAppGrid';

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .order-wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    padding-bottom: 75px;
    text-align: center;

    @include md {
      padding-bottom: 30px;
    }
  }

  .order {
    width: 100%;
    max-width: 250px;
  }

  .banner {
    position: relative;
    border-radius: 50px;
    overflow: hidden;
    margin-bottom: 95px;

    @include md {
      margin-bottom: 50px;
    }

    @include sm {
      margin: 0 -16px 50px;
      border-radius: 40px;
    }
  }

  .banner__img {
    width: 100%;
  }

  .title {
    font-weight: 400;
    font-size: 34px;
    line-height: 1.25;
    letter-spacing: var(--lett-sp-sm);
    color: var(--color-text-dark);
    max-width: 604px;
    margin: 0 auto;
    text-align: center;

    @include md {
      font-size: 30px;
      max-width: 580px;
    }

    @include sm {
      font-size: 24px;
      line-height: 1.1;
      max-width: 275px;
      letter-spacing: -0.01em;
    }
  }
</style>
