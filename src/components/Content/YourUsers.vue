<template>
  <div>
    <section class="your-users">
      <img src="@/assets/images/bg-section-top-desktop-2.svg" alt="" class="gt-top-img" />
      <!-- mobile background -->
      <!-- <img src="./images/bg-section-top-mobile-2.svg" alt="" class="mbl-bg" /> -->

      <div class="bg-color">
        <base-container>
          <div class="container flex">
            <div class="sec-content">
              <h2 class="sec-heading">Your Users</h2>
              <p class="sec-para">
                It takes no time at all to integrate Huddle with your app's authentication solution.
                This means, once signed in to your app, your users can start chatting immediately.
              </p>
            </div>
            <div class="sec-image">
              <img src="@/assets/images/illustration-your-users.svg" alt="" class="sec-img" />
            </div>
          </div>
        </base-container>
      </div>

      <img src="@/assets/images/bg-section-bottom-desktop-2.svg" alt="" class="gt-top-img" />
      <!-- mobile background -->
      <!-- <img src="./images/bg-section-bottom-mobile-2.svg" alt="" class="mbl-bg" /> -->
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.your-users {
  padding-top: 30px;
  padding-bottom: 70px;
}
.gt-top-img {
  width: 100%;
  display: block;
}
.gt-bt-img {
  width: 100%;
  display: block;
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
