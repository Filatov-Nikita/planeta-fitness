<template>
  <section id="trainings">
    <div class="wrapper">
      <h2 class="h2 text-center title">Выбери свою идеальную тренировку</h2>
      <div class="items">
        <div class="item-list">

        </div>
        <div class="item">
          <img
            class="photo"
            width="430"
            height="602"
            src="@/assets/images/woman1.jpg"
            alt="Девушка занимающаяся стрейчингом"
            loading="lazy"
          />
        </div>
        <div class="item">
          <img
            class="photo"
            width="430"
            height="602"
            src="@/assets/images/woman2.jpg"
            alt="Девушка занимающаяся бегом"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 35px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    --col: 33.3%;
    --gap: 25px;
    margin-left: calc(var(--gap) * -1);
    margin-top: calc(var(--gap) * -1);
  }

  .item, .item-list {
    width: calc(var(--col) - var(--gap));
    margin-left: var(--gap);
    margin-top: var(--gap);
  }

  .item-list {
    background: #313634;
    border-radius: 50px;
  }

  .photo {
    width: 100%;
    border-radius: 50px;
  }
</style>
