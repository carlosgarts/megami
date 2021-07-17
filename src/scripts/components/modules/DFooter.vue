<template>
  <footer id="business">
      <h2 class="slogan">You are our choshen one <br> to see the future.</h2>
      <h3 class="jap">私たちの偉大なサイボーグ帝国の名誉のために</h3>
      <div class="information">
        <img class="logo" src="./assets/logo.svg" alt="Logo">
        <ul class="socials">
          <li> <a href=""> <img class="social-icon" src="./assets/instagram.svg" alt="Yojimbo Glasses"> </a> </li>
          <li> <a href=""> <img class="social-icon" src="./assets/behance.svg" alt="Yojimbo Glasses"> </a> </li>
          <li> <a href=""> <img class="social-icon" src="./assets/linkedin.svg" alt="Yojimbo Glasses"> </a> </li>
        </ul>
        <ul class="info right text">
          <li class="text">
            <h4>Office</h4>
            <p>New Lancaster, Times Round <br> Plaza, Industrial Center  5th level, <br> BRF 25003566349543212452</p>
          </li>
          <li class="text">
            <h4>Contact</h4>
            <p>+ A5 233 45 65 7</p>
            <p>+ A5 233 45 65 7</p>
            <p>Megami@glassworks.zen</p>
          </li>
        </ul>
        <ul class="info left ">
          <li class="text">
            <h4>Bussiness</h4>
            <p><a href="">More About Us</a></p>
            <p><a href="">Our Law Enforcement Solutions</a></p>
            <p><a href="">Private Training Facilities</a></p>
          </li>
          <li class="text">
            <h4>Carrers</h4>
            <p><a href="">Apply for a Job</a></p>
            <p><a href="">Kamigawa University</a></p>
            <p><a href="">Become Partner</a></p>
          </li>
        </ul>
      </div>
      <div class="goup right"> <!-- <button v-on:click="scrollUp()">&#8593;</button> --> </div>
      <div class="goup left"> <button v-on:click="scrollUp()">&#8593;</button> </div>
  </footer>
</template>

<script>
import { scrollToTop } from '../utils/animations.js';

export default {
  name: 'DFooter',
  methods: {
    scrollUp: function() {
      scrollToTop();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/components/variables.scss";

footer {
  width: 100%;
  background-color: lightgrey;
  display: grid;
  grid-template-columns: 1fr;
  font-family: $titulo;
  align-items: center;
  justify-content: center;
  @media (min-width: $mid-size) {
    grid-template-columns: 4vw 1fr 4vw;
  }
  .slogan {
    width: 90%;
    margin: 100px 5% 25px 5%;
    text-align: center;
    font-size: 33px;
    @media (min-width: $movil-size) {
      font-size: calc(33px + 32 * ((100vw - 700px) / 580));
    }
    @media (min-width: $mid-size) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      margin: 100px 5% 0 5%;
    }
    @media (min-width: $tablet-size) {
      font-size: 65px;
    }
  }
  .jap {
    font-family: $japones;
    width: 90%;
    text-align: center;
    font-size: 11px;
    margin: 0 5% 35px 5%;
    @media (min-width: $movil-size) {
      font-size: calc(11px + 7 * ((100vw - 700px) / 580));
      margin: 25px 5% 25px 5%;
    }
    @media (min-width: $mid-size) {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }
    @media (min-width: $tablet-size) {
      font-size: 23px;
    }
  }

  .information {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    @media (min-width: $mid-size) {
      grid-template-columns: 1fr 20vw 1fr;
      grid-row: 3 / 4;
      grid-column: 2 / 3;
    }
    .logo {
      width: 50%;
      margin: auto;
      @media (min-width: $mid-size) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        width: 100%;
      }
    }
    .socials {
      width: 50%;
      margin: 20px auto;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      justify-content: space-around;
      @media (min-width: $mid-size) {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        width: 100%;
      }
      li {
        width: 13vw;//50px;
        height: 13vw;//50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: $mid-size) {
          width: 5vw;//60px;
          height: 5vw;//60px;
        }
        a {
          width: 40%;
          height: 40%;
          .social-icon {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .info {
      list-style: none;
      padding: 0;
      margin: 0 5%;
      text-align: center;
      &.right {
        @media (min-width: $mid-size) {
         text-align: right;
        }
      }
      &.left {
        @media (min-width: $mid-size) {
         text-align: left;
        }
      }
      .text {
        margin: 15px 0;
        @media (min-width: $mid-size) {
          margin: 40px 0;
        }
      }
      h4 {
        margin: 5px 0;
        font-size: 24px;
        @media (min-width: $mid-size) {
          font-size: 40px;
        }
      }
      p {
        font-family: $parrafo;
        font-size: 13px;
        line-height: 22px;
        margin: 5px 0;
        @media (min-width: $mid-size) {
          
        }
        a {
          color: black;
          text-decoration: none;
        }
      }
    }
  }



  .goup {
    display: none;
    color: black;
    background-color: #FFD46A;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    font-size: 60px;
    @media (min-width: $mid-size) {
      display: flex;
      &.right {
        grid-row: 1 / 4;
        grid-column: 3 / 4;
      }
      &.left {
        grid-row: 1 / 4;
        grid-column: 1 / 2;
      }
    }
    button {
      background-color: transparent;
      border: none;
      border-radius: 0;
      position: relative;
      margin-bottom: 40px;
      height: 100px;
      cursor: pointer;
    }
  }
}



</style>