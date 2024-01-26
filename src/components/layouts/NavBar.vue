<template>
  <the-header>
    <base-container>
      <section class="navbar">
        <div class="nav-logo">
          <img src="@/assets/images/logo.svg" alt="" class="nav-img" />
        </div>
        <button class="btn btn-primary">Try It Free</button>
      </section>
    </base-container>
  </the-header>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.btn-primary {
  border: 2px solid var(--Pink);
  color: var(--Pink);
}

.btn-primary:hover {
  border-color: var(--Light-Pink);
  color: var(--Light-Pink);
  cursor: pointer;
}
</style>
