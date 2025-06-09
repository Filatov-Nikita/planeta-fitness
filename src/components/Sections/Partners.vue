<template>
  <section id="partners">
    <div class="wrapper">
      <h2 class="h2 text-center title">Партнеры</h2>
      <Swiper
        slides-per-view="auto"
        space-between="120"
      >
        <SwiperSlide class="slide">
          <img width="100" height="100" src="@/assets/images/partners/fitness-team.svg" loading="lazy" alt="FITNESS TEAM">
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="119" height="124" src="@/assets/images/partners/barbara.png" loading="lazy" alt="Barbara Fitness">
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="175" height="82" src="@/assets/images/partners/mendeleef.svg" loading="lazy" alt="Mendeleef Fitness">
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="216" height="105" src="@/assets/images/partners/zorge.svg" loading="lazy" alt="Zorge Fitness">
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="155" height="92" src="@/assets/images/partners/korolef.svg" loading="lazy" alt="Korolef Fitness">
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 55px;
  }

  .slide {
    user-select: none;
    width: fit-content;
    display: flex;
    align-items: center;
    height: auto !important;
  }
</style>
