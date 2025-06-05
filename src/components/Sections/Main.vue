<template>
  <div class="main-block">
    <div class="wrapper">
      <div class="banner">
        <img class="banner__img" src="@/assets/images/banner.jpg" width="2011" height="1131" alt="Фитнес на Крыше">
        <div class="order-wrap">
          <BaseButton class="order">Записаться</BaseButton>
        </div>
      </div>
      <h1 class="title">
        Каждый день на крыше Планеты бесплатные занятия вместе с F-team
      </h1>
    </div>
  </div>
</template>

<script setup>

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
  }
</style>
