<template>
  <div class="cardContainer">
    <a v-bind:href="card.url" v-for="card in projectList">
      <div ref="cardAnimate" class="cardID">
        <h1>{{ card.name }}</h1>
        <p>{{ card.url }}</p>
      </div>
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
          name: "GAMBLING",
          url: "http://gambling.idonot.tk"
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
        },{
          name: " ",
          url: " "
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

    a {
      text-decoration: none;
    }

    .cardID {
      opacity: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 10px;
      color: black;

      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      h1 {
        border-right: 3px solid black;
        padding-right: 8px;
        margin-right: 6px;
      }
    }
  }
</style>
