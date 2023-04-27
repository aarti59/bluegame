<template>
  <div class="card-custom">
    <div class="close-icon">
      <img src="../assets/close-icon.svg" alt="close icon" />
    </div>
    <div>
      <img
        class="align-end text-white firsh-bg"
        height="200"
        src="../assets/Rectangle60.svg"
        cover
      />
      <div class="coin-img">
        <img src="../assets/Coin.svg" alt="" />
      </div>
      <div class="group-img">
        <img src="../assets/Group305.svg" alt="" />
      </div>
      <form class="form-input-fild" @submit.prevent="submitForm">
        <div v-if="showemptyemail" class="fill-the-field-c">
          <div class="check-line">
            <img src="../assets/fill-the-field.svg" class="img-flude" alt="check" />
            <span>Please fill in this field</span>
          </div>
        </div>
        <div v-if="passwordCheck && !showemptyemail" class="input-fild-c">
          <div class="check-line">
            <img
              v-if="chracterCheck"
              src="../assets/check-right.svg"
              class="img-flude"
              alt="check"
            />
            <img
              v-if="!chracterCheck"
              src="../assets/cancle-check.svg"
              class="img-flude"
              alt="check"
            />
            <span v-bind:class="chracterCheck ? 'check-text' : ''">8-30 Characters in length</span>
          </div>
          <div class="check-line">
            <img
              v-if="upperLowerCharacterCheck"
              src="../assets/check-right.svg"
              class="img-flude"
              alt="check"
            />
            <img
              v-if="!upperLowerCharacterCheck"
              src="../assets/cancle-check.svg"
              class="img-flude"
              alt="check"
            />
            <span v-bind:class="upperLowerCharacterCheck ? 'check-text' : ''"
              >Contains one upper and one lowercase character</span
            >
          </div>
          <div class="check-line">
            <img v-if="numberCheck" src="../assets/check-right.svg" class="img-flude" alt="check" />
            <img
              v-if="!numberCheck"
              src="../assets/cancle-check.svg"
              class="img-flude"
              alt="check"
            />
            <span v-bind:class="numberCheck ? 'check-text' : ''">Contains a number</span>
          </div>
        </div>
        <div class="input-fild">
          <label for=""> Email Address</label>
          <input type="mail" v-model="formData.email" @input="checkemailValidation()" />
        </div>

        <div class="input-fild">
          <div class="eye-icon"><img src="../assets/viewpassword.svg" alt="" /></div>
          <label for=""> Password</label>
          <input type="password" v-model="formData.password" @input="checkPasswordValidation()" />
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
              I agree to the <span> User Agreement & confirm </span> I am at least 18 years
              old</label
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
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
      },
      showemptyemail: false,
      passwordCheck: false,
      chracterCheck: false,
      upperLowerCharacterCheck: false,
      numberCheck: false
    }
  },
  methods: {
    submitForm(): void {
      if (this.formData.email == '' || !this.formData.email) {
        this.showemptyemail = true
      }
      // we will get the form data here
      console.log('form data..........', this.formData)
      // Handle form submission here
      if (
        this.chracterCheck &&
        this.upperLowerCharacterCheck &&
        this.numberCheck &&
        !this.showemptyemail
      ) {
        this.$router.push(`/displayname`)
      }
    },
    checkemailValidation() {
      console.log('.......called......', this.formData.email)
      // this.showemptyemail = this.formData.email == '' || !this.formData.email ? true : false
      let isEmail = this.validateEmail(this.formData.email)
      this.showemptyemail = isEmail ? false : true
    },
    checkPasswordValidation() {
      this.passwordCheck = true
      this.formData.password = this.formData.password.replace(/\s/g, '') // remove all spaces

      this.chracterCheck =
        this.formData.password &&
        this.formData.password.length >= 8 &&
        this.formData.password.length <= 24
          ? true
          : false
      // check string has atleast one upper case and one lower case character
      this.upperLowerCharacterCheck = this.checkString(this.formData.password)
      // check if string contains a number or not
      this.numberCheck = this.containsNumber(this.formData.password)
    },
    // preventSpaces(event: KeyboardEvent) {
    //   if (event.key === ' ') {
    //     event.preventDefault() // prevent the space from being entered
    //   }
    // },

    checkString(str: string): boolean {
      console.log('string....123...', str)
      const regex = /(?=.*[a-z])(?=.*[A-Z])/
      return regex.test(str)
    },
    containsNumber(str: string): boolean {
      const regex = /\d/
      return regex.test(str)
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/
      return re.test(email)
    }
  }
})
</script>
<style scoped>
.card-custom {
  /* position: absolute; */
  /* width: 471px; */
  /* height: 816px; */
  /* left: 732px; */
  /* top: 110px; */
  background: #2e274c;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.close-icon {
  position: absolute;
  top: 21px;
  right: 21px;
  width: 14px;
  height: 14px;
  z-index: 9999999;
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
  margin: 0 0 50px 0;
}
.fill-the-field-c {
  margin-top: -40px !important;
  width: 80%;
  margin: 0 auto;
  background: #211f31;
  box-shadow: inset 2px 0px 4px 1px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 22px 0;
}
.fill-the-field-c .check-line {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fill-the-field-c .check-line span {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #7782aa;
  margin-left: 10px;
}
.input-fild-c {
  margin-top: -40px !important;
  width: 80%;
  margin: 0 auto;
  background: #211f31;
  box-shadow: inset 2px 0px 4px 1px rgba(0, 0, 0, 0.12);
  border-radius: 12px 12px 0 0;
  padding: 15px;
}
.input-fild-c img {
  width: 16px;
  height: 16px;
}
.input-fild-c .check-line {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 14px;
}
.input-fild-c span {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #7782aa;
  margin-left: 12px;
}
.check-text {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #12ff76 !important;
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
  position: relative;
}
.eye-icon {
  position: absolute;
  right: 25px;
  top: 30%;
  width: 15px;
  height: 15px;
  z-index: 99999;
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
