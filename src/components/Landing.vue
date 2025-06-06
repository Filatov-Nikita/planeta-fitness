<template>
  <main>
    <Header />
    <SectionMain class="section-main" />
    <PeriodTape class="section-tape" />
    <SectionTrainings />
    <SectionFaq class="section-faq" />
    <Footer />
  </main>
</template>

<script setup>
  import Header from './Sections/Header.vue';
  import Footer from './Sections/Footer.vue';
  import SectionMain from './Sections/Main.vue';
  import PeriodTape from './Sections/PeriodTape.vue';
  import SectionTrainings from './Sections/Trainings.vue';
  import SectionFaq from './Sections/Faq.vue';
</script>

<style scoped lang="scss">
  .section-main {
    margin-bottom: 35px;
  }

  .section-tape {
    margin-bottom: 150px;
  }

  .section-faq {
    margin-top: 150px;
  }
</style>
