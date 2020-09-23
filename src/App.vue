<template>
  <div id="app">
    <div class="big-container">
      <Header></Header>
      <div class="content-container">
        <div>
          <HelloWorld
            title="Scheduled Post"
            msg="Share what are you thinking here..."
            buttontext="SCHEDULE POST"
            trophy
            heart
            comment
          />
          <HelloWorld
            title="Status"
            msg="Share what are you thinking here..."
            buttontext="POST STATUS"
            heart
            comment
          />
        </div>
        <div>
          <Activity_Feed></Activity_Feed>
        </div>
      </div>
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

    <font-awesome-icon icon="user" />
    <font-awesome-icon icon="comment" />
    <font-awesome-icon icon="bolt" />
    <font-awesome-icon icon="angle-down" />

    <font-awesome-icon icon="ellipsis-h" />
    <font-awesome-icon icon="trophy" />
      <font-awesome-icon icon="heart" />-->
      <!-- <font-awesome-icon icon="heart" /> -->
    </div>
    <Sidebar id="sidebar">
      <img src="https://iamneverfar.com/images/logo.png" />
      <ul class="sidebar-panel-nav">
        <li>
          <Burger>
            <a href="#home">
              <font-awesome-icon icon="reply-all" />
              <span>Collapse Menu</span>
            </a>
          </Burger>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="list-alt" />
            <span>Timeline</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="newspaper" />
            <span>Newsfeed</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="users" />
            <span>Family Circles</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="volume-up" />
            <span>Audio Messages</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="pencil-alt" />
            <span>Written Messages</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="image" />
            <span>Photos</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="video" />
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="clock" />
            <span>Scheduled Posts</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="credit-card" />
            <span>Billing</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <font-awesome-icon icon="power-off" />
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "./components/Burger.vue";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Activity_Feed from "./components/Activity_Feed";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    Burger,
    Sidebar,
    Header,
    HelloWorld,
    Activity_Feed
  }
};
</script>

<style>
#app {
  margin-top: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
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

.sidebar-panel > img {
  margin-left: 60px;
  height: 90px;
}

.svg-inline--fa {
  color: #ff1493;
}

body {
  background: #eeeeee;
}
.big-container {
  padding-left: 40px;
  width: 100vw;
  overflow: hidden;
}
.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
