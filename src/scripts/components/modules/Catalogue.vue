<template>
  <div id="catalogue" class="catalogue" style="background-image: url('./assets/svg/background-catalogue.svg')">
      <ul class="content">
          <li class="entry title">
              <h2>Catalogue</h2>
              <img class="bars" src="./assets/stripes.svg" alt="">
          </li>
          <li v-for="item in items" v-bind:key="item.key" class="entry product">
              <img class="photo" v-bind:src="item.image" alt="">
              <h3 class="title">{{item.product}}</h3>
              <div class="text">
                  <p class="price">{{item.price}}</p>
                  <p class="description">{{item.description}}</p>
              </div>
          </li>
          <li class="entry more">
              <a href="">
                <h2 data-text="More">More</h2>
                <img class="bars" src="./assets/stripes.svg" alt="">
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data: function () {
    return {
      items: [
          {
              id: 0,
              product: 'Tenkai',
              price: '300.000 Lz/u',
              description: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ante ligula, tristique eleifend dictum quis, tempus quis quam.',
              image: './assets/products/tenkaiV1-01.png'
          },
          {
              id: 1,
              product: 'Bodyguard',
              price: '250.000 Lz/u',
              description: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ante ligula, tristique eleifend dictum quis, tempus quis quam.',
              image: './assets/products/bodyguard-01.png'
          },
          {
              id: 3,
              product: 'Yojimbo',
              price: '375.000 Lz/u',
              description: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ante ligula, tristique eleifend dictum quis, tempus quis quam.',
              image: './assets/products/yojim01.png'
          },
          {
              id: 4,
              product: 'Streetwise',
              price: '280.000 Lz/u',
              description: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ante ligula, tristique eleifend dictum quis, tempus quis quam.',
              image: './assets/products/streetwiseV2-01.png'
          },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/components/variables.scss";

.catalogue {
    font-family: $titulo;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 0;
    .content {
        list-style: none;
        width: 90%;
        margin: 5vh 5%;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 50px;
        row-gap: 50px;
        @media (min-width: $movil-size) {
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: $mid-size) {
            width: 88%;
            margin: 10vh 7% 10vh 5%;    
        }
        @media (min-width: $tablet-size) {
            //margin: 10vh 5%;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
}

.entry {
    width: 90%;
    height: 90vw;
    background-color: white;
    position: relative;
    padding: 5%;
    height: 90vw;
    @media (min-width: $movil-size) {
        height: calc(45vw - 25px);
    }
    @media (min-width: $tablet-size) {
        height: calc(30vw - 50px);
    }
    a {
        text-decoration: none;
        width: auto;
        height: auto;
        &:hover {
            h2 {
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
                    text-shadow: -2px 0 white;
                    /* Creates an initial clip for our glitch. This works in
                    a typical top,right,bottom,left fashion and creates a mask
                    to only show a certain part of the glitch at a time. */
                    clip: rect(44px, 450px, 56px, 0);
                    animation: glitch-anim 5s infinite linear alternate-reverse;
                }
                
                // Creates a copy after our text. Note comments from ::before.
                &::after {
                    @include glitchCopy;
                    left: -2px;
                    text-shadow: -2px 0 white, 2px 2px black;
                    animation: glitch-anim2 1s infinite linear alternate-reverse;
                }
            }
        }
    }
    .bars {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    &.more, &.title {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            z-index: 5;
            position: relative;
            font-size: 64px;
            @media (min-width: $movil-size) {
                font-size: calc(50px + 14 * ((100vw - 700px) / 580));
            }
            @media (min-width: $tablet-size) {
                font-size: 64px;
            }
        }
    }
    &.title {
        .bars {
            position: absolute;
            left: -2%;
            top: -2%;
            @media (min-width: $tablet-size) {
                left: -5%;
                top: -5%;
            }
        }
    }
    &.more {
        .bars {
            position: absolute;
            right: -2%;
            bottom: -2%;
            @media (min-width: $tablet-size) {
                right: -5%;
                bottom: -5%;
            }
        }
    }
}


.product {
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    .photo {
        transition: 0.5s;
        width: 90%;
        height: 90%;
        position: absolute;
        top: 0;
        object-fit: contain;
    }
    .title {
        margin: 5px 0;
        font-size: 36px;
        padding-top: 8px;
        border-top: 1px solid black;
        @media($movil-size){

        }
        @media($tablet-size){
            font-size: 36px;
        }
    }
    .text {
        transition: 0.3s ease;
        font-family: $parrafo;
        max-height: 0px;
        overflow: hidden;
        .price {
            margin: 5px 0;
            font-size: 16px;
        }
        .description {
            margin: 5px 0;
            font-size: 12px;
            line-height: 16px;
        }
    }
    &:hover {
        .photo {
            height: 65%;
        }
        .text {
            max-height: 100%;
        }
    }
}

//fonts color
h3,
h2,
p {
    color: black;
}

</style>