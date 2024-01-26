<template>
  <the-header>
    <base-container>
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-heading">{{ heading }}</h1>
          <p class="hero-para">{{ para }}</p>

          <button class="btn btn-secondary">Get Started For Free</button>
        </div>

        <div class="hero-image">
          <img src="@/assets/images/screen-mockups.svg" alt="" class="" />
        </div>
      </section>
    </base-container>
  </the-header>
</template>

<script>
export default {
  props: ['heading', 'para']
}
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  margin-top: 40px;
  gap: 60px;
}

.hero-content {
  text-align: center;
}

.hero-heading {
  font-family: var(--ff-pop);
  font-size: 45px;
  padding-bottom: 20px;
}

.hero-para {
  max-width: 550px;
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 18px;
}

.hero-img {
  width: 85%;
  margin: 0 auto;
}

.btn-secondary {
  background-color: var(--Pink);
  color: #fff;
  padding: 16px 100px 16px 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.btn-secondary:hover {
  cursor: pointer;
  background-color: var(--Light-Pink);
}
</style>
