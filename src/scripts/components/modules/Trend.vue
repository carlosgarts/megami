<template>
  <div id="trend-banner" class="grid double-col">
      <div class="col first">
        <h3 class="t-title" >Complete urban Domain &amp; Security</h3>
        <p class="t-par">Yojimbo sightware now available for the private market</p>
      </div>
      <div class="col second">
          <img id="banner01" src="./assets/banner1.png" alt="Yojimbo Glasses">
      </div>
  </div>
</template>

<script>
import { moveGlasses } from "../utils/animations.js";
export default {
    mounted: function() {
        moveGlasses();
    }

}
</script>

<style lang="scss" scoped>
@import "../../../styles/components/variables.scss";
    #trend-banner {
        //min-height: 400px;
        background-color: white;
        margin: 10vh 0;
        min-height: 260px;
        @media (min-width: 800) {
            min-height: 300px;
        }
        @media (min-width: 1400px) {
            min-height: 400px;
        }
    }
    .grid {
        display: grid;
        width: 100%;
        background-image: url('./assets/stripes.svg');
        background-repeat: no-repeat;
        background-size: cover;
        @media (min-width: $movil-size) {
            background-image: none;
        }
        &.double-col {
            grid-template-columns: 1fr;
            @media (min-width: $movil-size) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .col {
            position: relative;
            //margin: 0px 5%;
            padding: 0px 5%;
            display: flex;
            align-items: flex-start;
            justify-content:center;
            flex-flow: column;
            background-repeat: no-repeat;
            background-size: cover;
            @media (min-width: $movil-size) {
                margin: 0px 10%;
                padding: 0;
            }
            &.first {
                @media (min-width: $movil-size){
                    z-index: 2;
                }
            }
            &.second {
                margin: 0;
                background-image: none;
                @media (min-width: $movil-size) {
                    background-image: url('./assets/stripes.svg');
                    z-index: 0;
                }
            }
            .t-title {
                font-family: $titulo;
                font-weight: 600;
                font-size: 40px;
                margin: 5px 0px;
                width: 90%;
                @media (min-width: 800) {
                    font-size: calc(28px + 40 * ((100vw - 800px) / 600));
                    margin: 15px 0px;
                }
                @media (min-width: 1400px){
                    width: 100%;
                    font-size: 68px;
                }
            }
            .t-par {
                font-family: $parrafo;
                margin: 0;
                width: 80%;
            }
        }
    }

    #banner01 {
        width: 70%;
        position: absolute;
        bottom: -45%;
        right: 0px;
        @media (min-width: $movil-size) {
            width: 100%;
            display: block;
            width: 90%;
            position: absolute;
            bottom: -15%;
            //left: -25%;
            right: unset;
        }
    }
</style>