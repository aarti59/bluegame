<template>
  <v-card class="card-custom">
    <img
      class="align-end text-white firsh-bg"
      height="200"
      src="../assets/Rectangle 60.svg"
      cover
    />
    <div class="coin-img">
      <img src="../assets/Coin.svg" alt="" />
    </div>
    <div class="group-img">
      <img src="../assets/Group 305.svg" alt="" />
    </div>
    <form class="form-input-fild" @submit.prevent="submitForm">
      <div class="input-fild">
        <label for=""> Email Address</label>
        <input type="mail" v-model="formData.email" />
      </div>
      <div class="input-fild">
        <label for=""> Password</label>
        <input type="password" v-model="formData.password" />
      </div>
      <div class="input-fild">
        <input
          type="text"
          placeholder="Referral/Promo Code(Optional)"
          v-model="formData.promocode"
        />
      </div>
      <div class="input-fild check-box">
        <div class="">
          <input type="checkbox" id="checkbox" name="checkbox" v-model="formData.checkbox" />
          <label for="checkbox">
            I agree to the <span> User Agreement & confirm </span> I am at least 18 years old</label
          >
        </div>
      </div>
      <div class="com-button">
        <!-- <a href="#" class="pop-up-btn" onclick="submitForm()"> Sign Up </a> -->
        <button class="pop-up-btn" type="submit">Sign Up</button>
      </div>
      <div class="com-text-singup">
        <span> Already have an account? <a href="#">Sign Up</a></span>
      </div>
      <div class="or-text">
        <span> OR</span>
      </div>
      <div class="bottom-icons">
        <div class="icon">
          <img src="../assets/facebook.svg" alt="" />
        </div>
        <div class="icon">
          <img src="../assets/twitter.svg" alt="" />
        </div>
        <div class="icon">
          <img src="../assets/tiktok.svg" alt="" />
        </div>
        <div class="icon">
          <img src="../assets/linkdin.svg" alt="" />
        </div>
      </div>
    </form>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface FormData {
  email: string
  password: string
  promocode: string
  checkbox: boolean
}

export default defineComponent({
  name: 'Login',
  data(): { formData: FormData } {
    return {
      formData: {
        email: '',
        password: '',
        promocode: '',
        checkbox: false
      }
    }
  },
  methods: {
    submitForm(): void {
      // we will get the form data here
      console.log('form data..........', this.formData)
      // Handle form submission here
    }
  }
})
</script>
<style scoped>
.card-custom {
  position: absolute;
  width: 471px;
  height: 816px;
  /* left: 732px; */
  top: 110px;
  background: #2e274c;
  border-radius: 16px;
}
.firsh-bg {
  width: 100%;
  position: relative;
}
.coin-img {
  position: absolute;
  top: -4px;
  right: 0;
}

.group-img {
  position: absolute;
  top: 5%;
  left: 6%;
}
.form-input-fild {
  margin: 50px 0;
}
.form-input-fild .input-fild {
  width: 80%;
  height: 50px;
  margin: 24px auto;
  background: #211f31;
  box-shadow: inset 2px 0px 4px 1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 6px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.form-input-fild .input-fild input {
  background-color: transparent !important;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  box-shadow: none;
  outline: none;
  border: 0 !important;
}
.check-box {
  background-color: transparent !important;
  box-shadow: none !important;
  padding-left: 0 !important;
}
.check-box label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #7782aa;
}
.check-box label span {
  color: #fff;
  font-weight: 700;
}
.com-button {
  width: 80%;
  margin: 0 auto;
}
.pop-up-btn {
  width: 100%;
  height: 60px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background: #32cfec;
  box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.11);
  border-radius: 12px;
  text-align: center;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.com-text-singup {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 35px 0;
  text-align: center;
}
.com-text-singup a {
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: #32cfec;
}
.or-text {
  text-align: center;
  position: relative;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #414968;
}
.or-text::after {
  position: absolute;
  content: '';
  top: 50%;
  right: 15%;
  width: 130px;
  height: 2px;
  background-color: #414968;
}
.or-text::before {
  position: absolute;
  content: '';
  top: 50%;
  left: 15%;
  width: 130px;
  height: 2px;
  background-color: #414968;
}
.bottom-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
}
.bottom-icons .icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #131828;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-one {
  /* position: absolute; */
  width: 471px;
  height: 187px;
  left: 732px;
  top: 110px;
  background: #d90439;
  border-radius: 16px 16px 0px 0px;
}
</style>
