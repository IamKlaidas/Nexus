<template>
  <div class="cardContainer">
    <a v-bind:href="card.url" v-for="card in projectList">
      <div v-for="card in projectList" ref="cardAnimate" class="cardID"></div>
    </a>

  </div>
</template>

<script>
import { startAnimation } from '../assets/animate';

export default {
  name: 'projectCards',
  mounted: function() {
    startAnimation(this.$refs.cardAnimate);
  },
  data() {
    return {
      projectList: [
        {
          name: "gambling",
          isHovering: false,
          url: "http://idonot.tk"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .cardContainer {
    position: relative;
    top: 1vw;
    left: 1vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, 23.75vw);
    grid-template-rows: repeat(3, 30.6vh);
    grid-gap: 1vw 1vw;

    .cardID {
      opacity: 0;
      height: 100%;
      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      background-color: white;
      border-radius: 10px;
    }
  }
</style>

<!-- .add({
  targets: ".cardID",
  translateX: [150, 0],
  translateY: [150, 0],
  opacity: 1,
  delay: function(el, i) {return anime.random(1, 20) * 150 },
  duration: 150,
  easing: 'linear',
  offset: "-=1000"
})-->
