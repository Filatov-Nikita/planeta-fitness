<template>
  <header class="header">
    <div class="wrapper">
      <div class="wrap">
        <a class="logo-wrap" href="https://ufa.planeta-mall.ru/" target="_blank">
          <img class="logo" src="@/assets/images/logo.svg" width="160" height="61" alt="Логотип Планета">
        </a>
        <nav class="nav">
          <div class="nav-item">
            <a class="nav-link" href="#categories">Виды занятий</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#schedule">Расписание</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#faq">Вопросы-ответы</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#partners">Партнеры</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .header {
    padding: 30px 0;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 50px;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 50px;
  }

  .logo-wrap {
    width: 160px;

    &:hover {
      opacity: 0.7;
    }
  }

  .nav-link {
    font-weight: 18px;
    line-height: 1;
    font-weight: 400;
    letter-spacing: var(--lett-sp-sm);
    color: var(--color-text-dark);

    &:hover {
      color: #6fab81;
    }
  }
</style>
