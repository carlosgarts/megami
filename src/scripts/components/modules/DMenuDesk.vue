<template>
  <nav id="desk-menu">
      <div class="links">
        <a class="glitch"  @click="goTo('#cover')" data-text="COVER">COVER</a>
        <a class="glitch"  @click="goTo('#trend-banner')" data-text="TRENDING">TRENDING</a>
        <a class="glitch"  @click="goTo('#catalogue')" data-text="CATALOGUE">CATALOGUE</a>
        <a class="glitch"  @click="goTo('#blog')" data-text="LIFESTYLE">LIFESTYLE</a>
        <a class="glitch"  @click="goTo('#business')" data-text="BUSINESS">BUSINESS</a>
      </div>
  </nav>
</template>

<script>
import { scrollToSection } from '../utils/animations.js';


export default {
  methods: {
    goTo: function(place) {
      scrollToSection(place);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/components/variables.scss";

#desk-menu {
    display: none;
    justify-content: center;
    align-items: center;
    font-family: $menu;
    position: fixed;
    bottom: -4vw;//2vh;
    right: 0;//0;//5%;
    z-index: 5;
    @media(min-width: $mid-size) {
      display: flex;
    }
}

.links {
  transform-origin: right top;
  transform: rotate(90deg);
  width: 100vh;
  height: 4vw;
  // padding-top: 5px;
  // padding-bottom: 5px;
  background: rgb(0,0,0);
  //background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 40%);
  //width: 60vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  }
// .links {
//   a {
//     text-decoration: none;
//     color: white;
//   }
// }

///Glitch animation

.glitch {
  position: relative;
	color: white;
  text-decoration: none;
	font-size: 15px;//4em;
	letter-spacing: .3em;
  cursor: pointer;
    &:hover {
      /* Animation provies a slight random skew. Check bottom of doc
      for more information on how to random skew. */
      animation: glitch-skew 1s infinite linear alternate-reverse;
      
      // Creates a copy before our text. 
      &::before{
        // Duplicates our text with the mixin.
        @include glitchCopy;
        // Scoots text slightly to the left for the color offset.
        left: 2px;
        // Creates the color 'shadow' that happens on the glitch.
        text-shadow: -2px 0 #ff00c1;
        /* Creates an initial clip for our glitch. This works in
        a typical top,right,bottom,left fashion and creates a mask
        to only show a certain part of the glitch at a time. */
        clip: rect(44px, 450px, 56px, 0);
        /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
        with an alternating animation to keep things fresh. */
        animation: glitch-anim 5s infinite linear alternate-reverse;
      }
      
      // Creates a copy after our text. Note comments from ::before.
      &::after {
        @include glitchCopy;
        left: -2px;
        text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
        animation: glitch-anim2 1s infinite linear alternate-reverse;
      }
    }
}

</style>