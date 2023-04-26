<template>
    <div class="display-main-box">
    <div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide" >
        <p><img src="../assets/profile_image_1.svg" alt=""></p>
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      &#10095
    </div>
  </div>
  <div class="display-title">
      Enter a display name
  </div>
  <div class="input-fild">
            <input type="mail"  placeholder="Username" />
          </div>
          <div class="submit-btn">
              <a href="#">Submit</a>
          </div>
  </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'displayname',
    data() {
      return {
        current: 0,
        direction: 1,
        transitionName: 'fade',
        show: false,
        slides: [{ className: 'blue' }, { className: 'red' }, { className: 'yellow' }]
      }
    },
    methods: {
      slide(dir: number) {
          console.log(".....dir...",dir)
        this.direction = dir
        dir === 1 ? (this.transitionName = 'slide-next') : (this.transitionName = 'slide-prev')
        const len = this.slides.length
        this.current = (((this.current + dir) % len) + len) % len
        console.log("len......currr",len,this.current)
      }
    },
    mounted() {
      this.show = true
    }
  })
  </script>
  <style>
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text');
  .display-title{
      font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  margin: 26px 0;
  }
  .display-main-box {
    background: #2e274c;
    border-radius: 16px;
    width: 471px;
  }
  .input-fild {
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
  .input-fild input {
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
  .submit-btn{
      margin: 40px auto;
      width: 80%;
    height: 60px;
    font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF !important;
    background: #353652;
  box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.11);
  border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .submit-btn a{
      font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  }
  .customstyle {
        display: flex !important;
        align-items: center;
        justify-content: center;
      }
  
  /* FADE IN */
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }
  
  /* GO TO NEXT SLIDE */
  .slide-next-enter-active,
  .slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-next-enter {
    transform: translate(100%);
  }
  .slide-next-leave-to {
    transform: translate(-100%);
  }
  
  /* GO TO PREVIOUS SLIDE */
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-prev-enter {
    transform: translatey(-100%);
  }
  .slide-prev-leave-to {
    transform: translate(100%);
  }
  
  
  
  
  
  #slider {
    width: 100%;
  }
  
  .slide {
    width: 100%;
    display: flex;
      justify-content: center;
      align-items: center;
   
  }
  
  .btn {
    z-index: 10;
    cursor: pointer;
    border: 3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(50% - 35px);
    left: 1%;
    transition: transform 0.3s ease-in-out;
    user-select: none;
  }
  
  .btn-next {
    left: auto;
    right: 15% !important;
    width: 32px;
  height: 32px;
  background: #211F31;
  color: #fff;
  box-shadow: inset 2px 0px 4px 1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
   border: 0 !important;
  }
  .btn-prev {
    left: auto;
    left: 15% !important;
    width: 32px;
  height: 32px;
  color: #fff;
  background: #211F31;
  box-shadow: inset 2px 0px 4px 1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: 0 !important;
  
   
  }
  
  .btn:hover {
    transform: scale(1.1);
  }
  </style>
  