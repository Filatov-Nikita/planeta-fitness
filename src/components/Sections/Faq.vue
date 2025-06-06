<template>
  <section id="faq">
    <div class="wrapper">
      <h2 class="h2 text-center title">Если остались вопросы</h2>
      <FaqList :items="items" />
    </div>
  </section>
</template>

<script setup>
  import FaqList from '@/components/Faq/List.vue';

  const items = [
    {
      title: 'Как попасть на площадку?',
      body: '2',
    },
    {
      title: 'Нужен ли свой коврик?',
      body: '2',
    },
    {
      title: 'Кто преподаватели?',
      body: '2',
    },
    {
      title: 'Занятия подходят для новичков?',
      body: '2',
    },
    {
      title: 'Нужно ли платить за вход?',
      body: '2',
    },
    {
      title: 'Нужно ли подтверждать запись?',
      body: '2',
    },
  ];
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 35px;
  }
</style>
