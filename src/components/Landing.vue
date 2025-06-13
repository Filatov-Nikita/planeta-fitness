<template>
  <main>
    <Header />
    <SectionMain class="section-main" />
    <PeriodTape class="section-tape" />
    <SectionTrainings class="section-trainings" />
    <SectionOrder class="section-order" />
    <SectionFaq class="section-faq" />
    <SectionPartners class="section-partners" />
    <Footer  />
    <AuthModal v-model:showed="auth.showedModal.value" @auth:completed="auth.onComplete" />
  </main>
</template>

<script setup>
  import Header from './Sections/Header.vue';
  import Footer from './Sections/Footer.vue';
  import SectionMain from './Sections/Main.vue';
  import PeriodTape from './Sections/PeriodTape.vue';
  import SectionTrainings from './Sections/Trainings.vue';
  import SectionFaq from './Sections/Faq.vue';
  import SectionPartners from './Sections/Partners.vue';
  import SectionOrder from './Sections/Order.vue';
  import AuthModal from '@/components/Auth/Modal.vue';
  import { init as initAuth } from '@/composables/useAuth';

  const auth = initAuth();
</script>

<style scoped lang="scss">
  .section-main {
    margin-bottom: 35px;
  }

  .section-tape {
    margin-bottom: 75px;
  }

  .section-trainings {
    padding: 75px 0;
  }

  .section-faq {
    padding: 75px 0;
  }

  .section-partners {
    padding: 75px 0 100px;
  }

  .section-order {
    padding: 75px 0;
  }
</style>
