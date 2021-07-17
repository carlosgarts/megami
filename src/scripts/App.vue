<template>
  <div id="app">
    <LoadScreen></LoadScreen>
    <DMenuDesk></DMenuDesk>
    <DMenu></DMenu>
    <div id="cover" class="cover">
      <Magazine></Magazine>
      <div id="displayer" v-bind:class="{ sticky: isSticky }"></div>
      <div class="exhibition">
        <h3>{{info[glass].subtitle}} <span>{{info[glass].speciality}}</span></h3>
        <!-- <h2>Horizon Scanner <span>Tenkai</span></h2> -->
        <svg class="promotion-t" height="30" width="200">
          <text x="0" y="85%" fill="white" stroke="none" font-family="Bebas Neue" >{{info[glass].title}} <tspan fill="none" stroke="white">{{info[glass].name}}</tspan></text>
        </svg> 
        <p>{{info[glass].description}}</p>
        <ul class="buttonband">
          <li><button class="chooser" v-bind:class="{ selected: glass == 'tenkai' }" @click="chooseGlass('tenkai')">Tenkai</button></li>
          <li><button class="chooser" v-bind:class="{ selected: glass == 'bodyguard' }" @click="chooseGlass('bodyguard')">Bodyguard</button></li>
          <li><button class="chooser" v-bind:class="{ selected: glass == 'wise' }" @click="chooseGlass('wise')">Streetwise</button></li>
        </ul>
      </div>
    </div>
    <Trend></Trend>
    <Catalogue></Catalogue>
    <Blog></Blog>
    <DFooter></DFooter>
  </div>
</template>

<script>
//import Hammer from 'hammerjs';
import Megami from './components/megami.js';
import LoadScreen from './components/modules/LoadScreen.vue';
import DMenuDesk from './components/modules/DMenuDesk.vue';
import DMenu from './components/modules/DMenu.vue';
import Magazine from './components/modules/Magazine.vue';
import Trend from './components/modules/Trend.vue';
import Catalogue from './components/modules/Catalogue.vue';
import Blog from './components/modules/Blog.vue';
import DFooter from './components/modules/DFooter.vue';
import * as information from './components/modules/assets/description.json';
import { log } from 'three';
import Sticky from 'sticky-js'

export default {
  name: 'app',
  components: {
    LoadScreen,
    DMenuDesk,
    DMenu,
    Trend,
    Magazine,
    Catalogue,
    Blog,
    DFooter
  },
  data: function () {
    return {
      isSticky: true,
      glass : "tenkai",
      info: information
    }
  },
  methods: {
    init: function() {
      Megami.methods.init('displayer');
      this.scrollHandler();
    },
    animation: function() {
      requestAnimationFrame(this.animation);
      Megami.methods.animate();
    },
    chooseGlass: function(value) {
      this.glass = value;
      Megami.methods.changeGlass(value);
    },
    panHandler (e) {
    },
    scrollHandler: function() {
      if(window.pageYOffset > (window.innerHeight + 100)){
        this.isSticky = false
      }
      else  if(window.pageYOffset <= (window.innerHeight + 100)){
        this.isSticky = true
      }
    }
  },
  watch: {
    position: function(val){

    }
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  mounted() {
      this.init('megami');
      this.animation();
  }
}
</script>

<style lang="scss">
  @import "../styles/components/variables.scss";
  #app {
    overflow-x: hidden;
  }
  
  .cover {
    height: 200vh;
    width: 100%;
    position: relative;
    #displayer {
      background-color: black;
      height: 100vh;
      width: 100vw;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -5;
      &.sticky {
        position: fixed;
      }
    }
    &::after {
      content: '';
      width: 100%;
      height: 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgb(235,107,176);
      background: linear-gradient(90deg, rgba(235,107,176,1) 0%, rgba(130,229,242,1) 100%); 
    }
  }

  .exhibition {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5vh 5%;
    display:flex;
    flex-flow: column;
    color: white;
    width: 90%;
    @media (min-width: $movil-size) {
      padding: 10vh 5%;
    }
    h3 {
      font-family: $titulo;
      font-weight: 400;
      margin: 0;
      font-size: 18px;
      @media (min-width: $movil-size) {
        font-size: 24px;
      }
      span {
        color: black;
      }
    }
    h2 {
      font-family: $titulo;
      font-size: 64px;
      margin: 5px 0;
    }
    .promotion-t {
      height: 37px;
      width: 100%;
      margin: 5px 0;
      @media (min-width: $movil-size) {
        height: calc(32px + 32 * ((100vw - 700px) / 580));
      }
      @media (min-width: 800px) {
        height: 64px;
      }
      text {
        font-family: $titulo;
        font-size: 37px;
        font-weight: 600;
        x: 0;
        y: 85%;
        @media (min-width: $movil-size) {
          font-size: calc(32px + 32 * ((100vw - 700px) / 580));
        }
        @media (min-width: 800px) {
          font-size: 64px;
        }
      }
    }
    p {
      font-family: $parrafo;
      margin: 0;
      font-size: 12px;
      line-height: 24px;
      width: 85%;
      max-width: 300px;
      @media (min-width: $movil-size) {
        font-size: 14px;
        max-width: 500px;
      }
    }
    ul {
      padding: 0;
      margin: 20px 0;
      list-style: none;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      order: -1;
      flex-flow: column;
      @media (min-width: $movil-size) {
        order: 0;
        flex-flow: row nowrap;
        margin: 10px 0;
      }
      li {
        margin-right: 10px;
        margin-top: 20px;
        @media (min-width: $movil-size) {
          margin-top: 0;
        }
        .chooser {
          transition: 0.5s;
          position: relative;
          font-family: $titulo;
          font-weight: 400;
          font-size: 24px;
          border: none;
          color: white;
          border-radius: 0;
          background-color: rgba($color: #000000, $alpha: 0.2);
          padding: 5px 15px;
          width: 150px;
          &:hover {
            background-color: rgba($color: #FFFFFF, $alpha: 0.2);
          }
          &::before,
          &::after {
            transition: transform 0.5s;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            transform: scale(0, 0);
          }
          &::before{
            top: 0;
            left: 0;
            transform-origin: top left;
            border-left: 1px solid white;
            border-top: 1px solid white;
          }
          &::after{
            bottom: 0;
            right: 0;
            transform-origin: bottom right;
            border-right: 1px solid white;
            border-bottom: 1px solid white;
          }
          &.selected {
            //border: 1px solid white;
            &::before,
            &::after {
              transition: transform 0.5s;
              transform:scale(100%, 100%);
            }
          }
          @media (min-width: $movil-size) {
            width: auto;
          }
        }
      }
    }
  }
  
</style>