<template>
    <div id="load-screen" class="container">
        <div class="loader loader-battery"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
@import "../../../styles/components/variables.scss";

.container {
  transition: 2s;
    margin: auto;
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    &.fade-out {
      transition: 2s;
      opacity: 0;
    }
}

.loader {
  width: 30px;
  height: 30px;
  position: relative;
  margin: auto;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  &-list {
    display: grid;
    grid-template: repeat(3, 120px) / repeat(3, 120px);
    grid-gap: 30px;
  }
  &-item {
    display: flex;
    background: rgba(0, 0, 0, 0.05);
  }
}

.loader-battery{ //7
    border: 1px solid #fff;
	height: 14px;
	width: 32px;
    &::before {
        width: 4px;
		height: 10px;
		background: #fff;
		left: 1px;
		top: calc(50% - 5px);
		animation: blockBar 2s infinite;
    }
}
	
	
	
@keyframes blockBar {
  0%,
  80% {
    opacity: 1;
  }
  0%,
  20% {
    box-shadow: 8px 0 0 0 rgba(255, 255, 255, 0), 16px 0 0 0 rgba(255, 255, 255, 0), 24px 0 0 0 rgba(255, 255, 255, 0);
  }
  21%,
  40% {
    box-shadow: 8px 0 0 0 rgba(255, 255, 255, 1), 16px 0 0 0 rgba(255, 255, 255, 0), 24px 0 0 0 rgba(255, 255, 255, 0);
  }
  41%,
  60% {
    box-shadow: 8px 0 0 0 rgba(255, 255, 255, 1), 16px 0 0 0 rgba(255, 255, 255, 1), 24px 0 0 0 rgba(255, 255, 255, 0);
  }
  61%,
  80% {
    box-shadow: 8px 0 0 0 rgba(255, 255, 255, 1), 16px 0 0 0 rgba(255, 255, 255, 1), 24px 0 0 0 rgba(255, 255, 255, 1);
  }
  81%,
  100% {
    opacity: 0;
  }
};

</style>