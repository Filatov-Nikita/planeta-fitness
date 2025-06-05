<template>
  <div class="main-block">
    <div class="wrapper">
      <div class="banner-wrap">
        <img class="banner" src="@/assets/images/banner.jpg" width="2011" height="1131" alt="Фитнес на Крыше">
      </div>
      <div class="order-wrap">
        <BaseButton class="order">Записаться</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .banner-wrap {
    border-radius: 50px;
    overflow: hidden;
  }

  .order-wrap {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    padding-bottom: 75px;
    text-align: center;
  }

  .main-block {
    position: relative;
  }

  .order {
    width: 100%;
    max-width: 250px;
  }
</style>
