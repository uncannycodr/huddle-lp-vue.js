<template>
  <div>
    <section class="cta">
      <base-container>
        <div class="container">
          <h2 class="cta-heading">Ready To Build Your Community?</h2>
          <button class="btn btn-secondary">Get Started For Free</button>
        </div>
      </base-container>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cta {
  text-align: center;
  padding-bottom: 100px;
}

.cta-heading {
  font-size: 40px;
  font-family: var(--ff-pop);
  font-weight: 700;
  padding-bottom: 40px;
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
