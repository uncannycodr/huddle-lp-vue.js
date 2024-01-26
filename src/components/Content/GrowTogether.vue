<template>
  <div>
    <section class="grow-together">
      <!-- desktop background -->
      <img src="@/assets/images/bg-section-top-desktop-1.svg" alt="" class="gt-top-img" />
      <!-- mobile background -->
      <!-- <img src="./images/bg-section-top-mobile-1.svg" alt="" class="mbl-bg" /> -->
      <!-- ----- -->
      <div class="bg-color">
        <base-container>
          <div class="container flex">
            <div class="sec-content">
              <h2 class="sec-heading">Grow Together</h2>
              <p class="sec-para">
                Generate meaningful discussions with your audience and build a strong, loyal
                community. Think of the insightful conversations you miss out on with a feedback
                form.
              </p>
            </div>

            <div class="sec-image">
              <img src="@/assets/images/illustration-grow-together.svg" alt="" class="sec-img" />
            </div>
          </div>
        </base-container>
      </div>

      <!-- desktop background -->
      <img src="@/assets/images/bg-section-bottom-desktop-1.svg" alt="" class="gt-top-img" />
      <!-- mobile background -->
      <!-- <img src="./images/bg-section-bottom-mobile-1.svg" alt="" class="mbl-bg" /> -->
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.gt-top-img {
  width: 100%;
  display: block;
}
.gt-bt-img {
  width: 100%;
  display: block;
}
.grow-together {
  padding-bottom: 70px;
}

.sec-content {
  flex: 1;
}

.sec-image {
  flex: 1;
}

.sec-img {
  width: 80%;
  margin-left: 30px;
}

.sec-heading {
  font-size: 40px;
  font-weight: 700;
  font-family: var(--ff-pop);
  padding-bottom: 15px;
}

.sec-para {
  max-width: 540px;
}
.bg-color {
  background-color: var(--Very-Pale-Blue);
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
