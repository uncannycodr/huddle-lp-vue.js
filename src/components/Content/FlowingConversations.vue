<template>
  <div>
    <section class="flowing-conversations">
      <base-container>
        <div class="container flex fc-flex">
          <div class="sec-image">
            <img
              src="@/assets/images/illustration-flowing-conversation.svg"
              alt=""
              class="sec-img-fc"
            />
          </div>
          <div class="sec-content">
            <h2 class="sec-heading">Flowing Conversations</h2>
            <p class="sec-para">
              You wouldn't paginate a conversation in real life, so why do it online? Our threads
              have just-in-time loading for a more natural flow.
            </p>
          </div>
        </div>
      </base-container>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sec-image {
  flex: 1;
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

.sec-img-fc {
  width: 80%;
  margin-right: 20px;
}

.flowing-conversations {
  padding-bottom: 70px;
}
</style>
