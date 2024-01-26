<template>
  <div>
    <section class="feedback">
      <div class="container fb-flex">
        <div v-for="item in list" :key="item.id">
          <img :src="getImg(item.icon)" alt="" />

          <div class="fb-content">
            <h2 class="fb-heading">{{ item.title }} +</h2>
            <p class="fb-para">{{ item.desc }}</p>
          </div>
        </div>
        <!-- <div class="messages">
          <img src="@/assets/images/icon-messages.svg" alt="" />

          <div class="fb-content">
            <h2 class="fb-heading">{{ heading2 }}</h2>
            <p class="fb-para">{{ para2 }}</p>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    getImg(icon) {
      return new URL(`../../assets/images/icon-${icon}.svg`, import.meta.url)
    }
  }
}
</script>

<style scoped>
.fb-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 450px;
  padding-top: 40px;
  padding-bottom: 130px;
}

.fb-content {
  text-align: center;
}

.fb-heading {
  font-size: 80px;
  font-weight: 700;
}

.fb-para {
  font-family: var(--ff-os);
  opacity: 0.7;
  font-size: 18px;
}
</style>
