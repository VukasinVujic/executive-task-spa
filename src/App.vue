<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <font-awesome-icon icon="user" />
    <font-awesome-icon icon="comment" />
    <font-awesome-icon icon="bolt" />
    <font-awesome-icon icon="reply-all" />
    <font-awesome-icon icon="list-alt" />
    <font-awesome-icon icon="newspaper" />
    <font-awesome-icon icon="users" />
    <font-awesome-icon icon="volume-up" />
    <font-awesome-icon icon="pencil-alt" />
    <font-awesome-icon icon="image" />
    <font-awesome-icon icon="video" />

    <font-awesome-icon icon="clock" />
    <font-awesome-icon icon="power-off" />
    <font-awesome-icon icon="credit-card" />

    <font-awesome-icon icon="search" />
    <font-awesome-icon icon="user" />
    <font-awesome-icon icon="comment" />
    <font-awesome-icon icon="bolt" />
    <font-awesome-icon icon="angle-down" />

    <font-awesome-icon icon="ellipsis-h" />
    <font-awesome-icon icon="trophy" />
    <font-awesome-icon icon="heart" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
