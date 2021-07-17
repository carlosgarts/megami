<template>
  <div id="magazine" class="magazine-grid">
      <img class="main-logo" src="./assets/logo.svg" alt="Site Logo">
      <div class="entry featured">
        <h2>NEW CYBER SECURITY FASHION SIGHTWARE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, 
          tristique eleifend dictum quis, tempus quis quam. Sed aliquet massa dolor.</p>
      </div>
      <div class="entry first">
        <h2>Lorem ipsum dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula.</p>
      </div>
      <div class="entry second">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante ligula, 
          tristique eleifend dictum quis, tempus quis quam. Sed aliquet massa dolor.</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../styles/components/variables.scss";

.magazine-grid {
  width: 90%;
  height: 90vh;
  margin: 5vh 5%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 45% auto 1fr;
  row-gap: 50px;
  @media (min-width: $movil-size) {
    width: 88%;
    height: 80vh;
    margin: 10vh 7% 10vh 5%;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 40% 20% 40%;
    row-gap: 0;
  }
}

.main-logo {
  height: 45%;
  width: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media (min-width: $movil-size) {
    height: 85%;
  }
}

.entry {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  h2 {
    font-family: $titulo;
    font-weight: bold;
    color: white;
    margin: 5px 0;
  }
  p {
    font-family: $parrafo;
    color: white;
    font-size: 12px;
    line-height: 18px;
    margin: 0;
    display: block;
    max-width: 90%;
    @media (min-width: $movil-size) {
      max-width: 80%;
      font-size: 14px;
    }
  }
  &.featured {
    justify-content: center;
    align-content: center;
    grid-row: 2 / 3;
    text-align: center;
    position: relative;
    @media (min-width: $movil-size) {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      text-align: right;
      justify-content: flex-end;
      align-content: flex-end;
    }
    &::after {
      display: none;
      content: '';
      position: absolute;
      left: 0;
      bottom: -18px;
      height: 1px;
      width: 100%;
      background-color: white;
      @media (min-width: $movil-size) {
        display: block;
      }
    }
    h2 {
      transition: 0.5s;
      font-size: 50px;
      @media (min-width: $movil-size) {
        font-size: calc(25px + 25 * ((100vw - 700px) / 580));
      }
      @media (min-width: $tablet-size) {
        font-size: 50px;
      }
    }
    p {
      align-self: center;
      @media (min-width: $movil-size) {
        align-self: flex-end;
      }
    }
  }
  &.first {
    justify-content: flex-start;
    align-content: center;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: none;
    @media (min-width: $movil-size) {
      display: flex;
    }
    h2 {
      transition: 0.5s;
      font-size: 22px;
      @media (min-width: $movil-size) {
        font-size: calc(22px + 22 * ((100vw - 700px) / 580));
        display: block;
      }
      @media (min-width: $tablet-size) {
        font-size: 44px;
      }
    }
  }
  &.second {
    justify-content: flex-start;
    align-content: center;
    grid-row: 3 / 4;
    text-align: center;
    position: relative;
    &::before {
      display: block;
      content: '';
      position: absolute;
      top: -25px;
      height: 1px;
      width: 50%;
      background-color: white;
      align-self: center;
      @media (min-width: $movil-size) {
        display: none;
      }
    }
    @media (min-width: $movil-size) {
      grid-column: 1 / 2;
      text-align: left;
      justify-content: flex-end;
      align-content: flex-start;
    }
    h2 {
      font-size: 30px;
      @media (min-width: $movil-size) {
        font-size: calc(18px + 46 * ((100vw - 700px) / 580));
      }
      @media (min-width: $tablet-size) {
        font-size: 64px;
      }
    }
    p {
      display: none;
      @media (min-width: $movil-size) {
        display: block;
      }
    }
  }
}

</style>