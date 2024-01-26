<template>
  <div class="container">
    <slot> </slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  --max-width: 1300px;
  --container-padding: 1rem;

  width: min(var(--max-width), 100% - (var(--container-padding)) * 4);
  margin-inline: auto;
}
</style>
