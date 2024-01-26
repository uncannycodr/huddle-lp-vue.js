<template>
  <footer>
    <img src="@/assets/images/bg-footer-top-desktop.svg" alt="" class="gt-bt-img" />
    <div class="footer-bg-color">
      <base-container>
        <div class="container footer-flex">
          <div class="info">
            <img src="@/assets/images/logo-footer.svg" alt="" class="footer-img" />
            <p class="info-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit
              lacinia vestibulum a, ultrices quis sem.
            </p>
            <span class="info-contact">
              <img src="@/assets/images/icon-phone.svg" alt="" />
              <span class="phone"> Phone: +1-543-123-4567 </span>
            </span>
            <span class="info-contact">
              <img src="@/assets/images/icon-email.svg" alt="" />
              <span class="email"> example@huddle.com </span>
            </span>
          </div>
          <div class="footer-form">
            <h3 class="form-heading">NEWSLETTER</h3>
            <p class="form-para">
              To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll
              never send you spam or pass on your email address
            </p>
            <form action="#" class="frm-ftr">
              <input type="text" name="text" />
              <button class="btn form-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </base-container>
      <base-container>
        <div class="container">
          <ul class="socials">
            <li>
              <a href="#" class="circle">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" class="circle">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" class="circle">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div class="attribution">
            <p>
              Challenge by
              <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
                >Frontend Mentor</a
              >. Coded by <a href="#">Uncanny Coder</a>.
            </p>
          </div>
        </div>
      </base-container>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  color: #fff;
}
.gt-bt-img {
  width: 100%;
  display: block;
}

.footer-bg-color {
  background-color: var(--Very-Dark-Cyan);
  padding-bottom: 70px;
  padding-top: 40px;
}

.info-contact {
  display: flex;
  gap: 20px;
  align-items: center;
}

.footer-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info {
  flex: 1;
  max-width: 350px;
}

.footer-form {
  flex: 1;
  margin-left: 400px;
}

.info-para {
  padding-bottom: 20px;
  padding-top: 20px;
  color: var(--Very-Pale-Blue);
}

.phone {
  padding-bottom: 15px;
  color: var(--Very-Pale-Blue);
}

.footer-img {
  padding-bottom: 10px;
  color: var(--Very-Pale-Blue);
}

.form-heading {
  font-size: 25px;
  font-weight: 600;
  font-family: var(--ff-os);
  padding-bottom: 10px;
  max-width: 400px;
}

.form-para {
  color: var(--Very-Pale-Blue);
  font-family: var(--ff-os);
  font-size: 16px;
  padding-bottom: 20px;
  max-width: 400px;
  font-weight: 400;
}

form input {
  padding: 5px 50px 5px 50px;
}

form input:focus {
  outline: none;
}

footer .socials {
  display: flex;
  padding-top: 20px;
}

footer .socials {
  list-style-type: none;
}

.socials li a {
  text-decoration: none;
}

footer .circle {
  color: #fff;
  border: 2px solid #fff;
  margin-right: 10px;
  border-radius: 50%;
  display: inline-flex;
  height: 40px;
  width: 40px;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  align-items: center;
}

footer .circle:hover {
  cursor: pointer;
  color: hsl(192, 93%, 50%);
  border-color: hsl(194, 94%, 47%);
}
.form-btn {
  color: #fff;
  background-color: var(--Pink);
  border-radius: 3px;
  padding: 7px 30px 7px 30px;
  margin-left: 20px;
}

.form-btn:hover {
  cursor: pointer;
  background-color: var(--Light-Pink);
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.attribution {
  font-size: 11px;
  text-align: start;
  padding-top: 30px;
}

.attribution a {
  color: hsl(322, 100%, 66%);
}
</style>
