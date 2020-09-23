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
      <!-- <Burger> </Burger> -->
      <img src="https://iamneverfar.com/images/logo.png" />
      <ul class="sidebar-panel-nav">
        <li>
          <Burger
            ><a href="#home"
              ><font-awesome-icon icon="reply-all" /><span
                >Collapse Menu</span
              ></a
            ></Burger
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="list-alt" /><span>Timeline</span></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="newspaper" /><span>Newsfeed</span></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="users" /><span>Family Circles</span></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="volume-up" /><span
              >Audio Messages</span
            ></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="pencil-alt" /><span
              >Written Messages</span
            ></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="image" /><span>Photos</span></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="video" /><span>Videos</span></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="clock" /><span>Scheduled Posts</span></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="credit-card" /><span>Billing</span></a
          >
        </li>
        <li>
          <a href="#home"
            ><font-awesome-icon icon="power-off" /><span>Log Out</span></a
          >
        </li>

        <!--
        <li><a href="#home"><font-awesome-icon icon="user" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="comment" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="bolt" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="image" /></a></li>

        <li><a href="#home"><font-awesome-icon icon="clock" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="power-off" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="credit-card" /></a></li>

        <li><a href="#home"><font-awesome-icon icon="search" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="user" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="comment" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="bolt" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="angle-down" /></a></li>

        <li><a href="#home"><font-awesome-icon icon="ellipsis-h" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="trophy" /></a></li>
        <li><a href="#home"><font-awesome-icon icon="heart" /></a></li>
        -->
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

.sidebar-panel {
  padding-top: 10px;
  overflow-x: hidden;
}

ul.sidebar-panel-nav {
  list-style-type: none;
  text-align: left;
  margin-left: 0;
  padding-left: 0;
  padding-bottom: 30px;
  overflow-x: hidden;
}

ul.sidebar-panel-nav > li {
  padding-top: 1.4rem;

  overflow-x: hidden;
}

ul.sidebar-panel-nav > li a > span {
  display: inline;
  margin-left: 30px;
  overflow-x: hidden;
  color: #ff1493;
}

ul.sidebar-panel-nav > li a {
  margin-left: 0px;
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
  margin-left: 0;
  overflow-x: hidden;
  white-space: nowrap;
}

/* This is sidebar */
.sidebar-panel,
.sidebar-opened {
  background: white;
}

/* .sidebar-panel { */
/* width: 30px; */
/* } */

.sidebar-panel > img {
  margin-left: 60px;
  height: 90px;
}

.svg-inline--fa {
  color: #ff1493;
}
</style>
