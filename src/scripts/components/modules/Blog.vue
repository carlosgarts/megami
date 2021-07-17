<template>
  <div id="blog" class="blog">
      <div class="title">
          <h2>Lifestyle</h2>
      </div>
    <ul class="news">
        <li class="entry entrance" style="background-image: url('./assets/blog/banner2.png')">
            <img  class="blog-logo" src="./assets/logo.svg" alt="">
        </li>
        <li class="entry" style="background-image: url('./assets/blog/01.jpg')">
            <div class="text">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Yojimbo sightware now available for the private market</p>
            </div>
        </li>
        <li class="entry" style="background-image: url('./assets/blog/02.jpg')">
            <div class="text">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Yojimbo sightware now available for the private market</p>
            </div>
        </li>
        <li class="entry" style="background-image: url('./assets/blog/03.jpg')">
            <div class="text">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Yojimbo sightware now available for the private market</p>
            </div>
        </li>
        <li class="entry more" style="background-image: url('./assets/blog/04.jpg')">
            <h3>+</h3>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../styles/components/variables.scss";

.blog {
    margin: 10vh 5%;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    font-family: $titulo;
    column-gap: 50px;
    row-gap: 20px;
    @media (min-width: $mid-size) {
        //margin: 250px 5%;
        grid-template-columns: 0.3fr 1.7fr;
        width: 88%;
        margin: 10vh 7% 10vh 5%;
    }
    .title {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0;
        position: relative;
        font-size: 30px;
        h2 {
            margin: 0;
            color: gray;
            opacity: 0.5;
        }
        @media (min-width: $mid-size) {
            align-items: center;
            justify-content: center;
            transform: rotate(-90deg);
            font-size: calc(30px + 115 * ((100vw - 700px) / 580));
            h2 {
                position: absolute;
            }
        }
        @media (min-width: $tablet-size) {
            font-size: 145px;
        }
    }
    .news {
        display: grid;
        grid-template-columns: 1fr 1fr;
        list-style: none;
        margin:0;
        padding: 0;
        column-gap: 15px;
        row-gap: 15px;
        @media (min-width: $mid-size) {
            grid-template-columns: 0.8fr 1.5fr 0.7fr;
            grid-template-rows: 40vh 5vh 40vh;
        }
        .entry {
            transition: .5s;
            display: flex;
            color: white;
            flex-flow: column;
            align-items: flex-start;
            justify-content: flex-end;
            height: calc(40vw - 7px);
            background-position: center center;
            background-size: cover;
            filter: grayscale(40%);
            
            &:hover {
                filter: grayscale(0);
                //filter: hue-rotate(60deg);
            }
            @media (min-width: $mid-size) {
                height: 100%;
                &:nth-child(2) {
                grid-column: 2 / 4;
                grid-row: 1 / 2;
                }
                &:nth-child(3) {
                    grid-column: 1 / 2;
                    grid-row: 3 / 4;
                    .text {
                        p {
                            display: none;
                        }
                    }
                }
                &:nth-child(4) {
                    grid-column: 2 / 3;
                    grid-row: 2 / 4;
                }
                &.more {
                    grid-column: 3 / 4;
                    grid-row: 2 / 4;
                    h3 {
                        font-size: 100px;
                    }
                }
            }
            .text {
                width: calc(100% - 3vw);
                padding: 1.5vw;
                h3 {
                font-size: 24px;
                margin: 5px 0;
                @media (min-width: $movil-size) {
                    font-size: calc(20px + 10 * ((100vw - 700px) / 580));
                }
                @media (min-width: $tablet-size) {
                    font-size: 30px;
                }
            }
            p {
                font-size: 14px;
                font-family: $parrafo;
                margin: 0;
                display: none;
                 @media (min-width: $mid-size) {
                     display: block;
                 }
            }
            }
            &.entrance, &.more {
                justify-content: center;
                align-items: center;
            }
            &.entrance {
                grid-row: 1 / 3;
                height: 100%;
                padding: 0;
            }
        }
    }
}


.entrance {
    
}
.blog-logo {
    width: 34%;  
    @media (min-width: $mid-size) {
        width: 40%;
    } 
}

</style>