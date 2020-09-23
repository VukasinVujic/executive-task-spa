<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- <font-awesome-icon icon="user" />
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
    <font-awesome-icon icon="heart" /> -->

    <Sidebar id="sidebar">
      <Burger></Burger>
      <ul class="sidebar-panel-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Burger from "./components/Burger.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Burger,
    Sidebar,
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

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  margin-left: 30px;
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
