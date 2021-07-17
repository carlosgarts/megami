<template>
  <nav id="phone-menu">
      <button class="toggler" v-on:click="reveal()">
        <!-- <img src="./assets/menu.svg" alt="menu"> -->
        <svg version="1.1" id="menu-bars" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 414.7 346.7" style="enable-background:new 0 0 414.7 346.7; fill: #FFFFFF;" xml:space="preserve">
          <filter id="shadow">
            <feDropShadow dx="14" dy="14" stdDeviation="0.5" flood-color="#82e5f2"/>
            <feDropShadow dx="-14" dy="-14" stdDeviation="0.5" flood-color="#eb6bb0"/>
          </filter>
          <g filter="url(#shadow)">
            <rect x="16.9" y="10.6" width="380.8" height="78"/>
            <rect x="16.9" y="134.4" width="380.8" height="78"/>
            <rect x="16.9" y="258.1" width="380.8" height="78"/>
          </g>
        </svg>
      </button>
      <transition name="fade">
        <div class="screen" v-if="expanded"></div>
      </transition>
      <div class="links">
        <a class="linkbox" @click="goToMov('#cover')">COVER <div class="linkline"></div> </a>
        <a class="linkbox" @click="goToMov('#trend-banner')">TRENDING <div class="linkline"></div> </a>
        <a class="linkbox" @click="goToMov('#catalogue')">CATALOGUE <div class="linkline"></div> </a>
        <a class="linkbox" @click="goToMov('#blog')">LIFESTYLE <div class="linkline"></div> </a>
        <a class="linkbox" @click="goToMov('#business')">BUSINESS <div class="linkline"></div> </a>
      </div>
  </nav>
</template>

<script>
import { revealMenu, scrollToSection } from '../utils/animations.js';

export default {
  data: function () {
    return {
      expanded: false
    }
  },
  methods: {
    reveal: function() {
      this.expanded = !this.expanded;
      revealMenu(this.expanded);
    },
    goToMov: function(place) {
      scrollToSection(place);
      this.reveal();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/components/variables.scss";

#phone-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $menu;
    position: fixed;
    bottom: 5%;
    right: 5%;
    z-index: 100;
    @media(min-width: $mid-size) {
      bottom: 10%;
      display: none;
    }
}

.toggler {
  width: 15vw;
  height: 15vw;
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 20;
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    border: 1px solid white;
    width: 110%;
    height: 110%;
    bottom: -5%;
    right: -5%;
    box-shadow: rgba(235,107,176,1) -5px -5px, rgba(130,229,242,1) 5px 5px;
  }
  svg {
    height: 100%;
    width: 100%;
  }
}

.screen {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(black, 0.3);
  opacity: 0.3;
}

.links {
  position: fixed;
  right: -100vw; //-50vw;
  top: -18vh; //18vh
  display: flex;
  flex-flow: column;
  transform: rotate(-30deg);
  align-items: flex-end;
  //width: 200vw;
  transform-origin: right center;
  //rotate: -30deg;
  @media (min-height: 800px) {
    top: -5vh;
  }
  .linkbox {
    margin: 3vh 0;
    color: white;
    text-decoration: none;
    background-color: gray;
    position: relative;
    //width: 70vw;
    width: 0vw;
    height: 50px;
    padding-left: 25px;
    display: flex;
    align-items: center;
    .linkline {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 3px;
      //width: 200vw;
      width: 0vw;
      background-color: white;
    }
    &:nth-child(1) {
      //width: 90vw;
      padding-right: 0;
    }
    &:nth-child(2) {
      //width: 105vw;
      padding-right: 15vw;
    }
    &:nth-child(3) {
      //width: 120vw;
      padding-right: 30vw;
    }
    &:nth-child(4) {
      //width: 135vw;
      padding-right: 45vw;
    }
    &:nth-child(5) {
      //width: 150vw;
      padding-right: 60vw;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>