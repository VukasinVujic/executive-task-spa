<template>
  <div class="container">
    <div class="seach-container">
      <span>
        Search
        <font-awesome-icon icon="search" />
      </span>
    </div>
    <div class="header-icons">
      <button class="btn-container">
        <Dropdown :is-icon="false" class="dropDown-icon">
          <template class="dropDown-icon" slot="btn">
            <font-awesome-icon icon="user" />
          </template>
          <template slot="body">
            <ul>
              <li v-for="i in [1, 2, 3, 4, 5]" v-bind:key="i">
                <label>item {{ i }}</label>
              </li>
            </ul>
          </template>
        </Dropdown>
      </button>

      <button class="btn-container">
        <Dropdown :is-icon="false" class="dropDown-icon">
          <template class="dropDown-icon" slot="btn">
            <font-awesome-icon icon="comment" />
          </template>
          <template slot="body">
            <ul>
              <li v-for="i in [1, 2, 3, 4, 5]" v-bind:key="i">
                <label>item {{ i }}</label>
              </li>
            </ul>
          </template>
        </Dropdown>
      </button>

      <button class="btn-container">
        <Dropdown :is-icon="false" class="dropDown-icon">
          <template class="dropDown-icon" slot="btn">
            <font-awesome-icon icon="bolt" />
          </template>
          <template slot="body">
            <ul>
              <li v-for="i in [1, 2, 3, 4, 5]" v-bind:key="i">
                <label>item {{ i }}</label>
              </li>
            </ul>
          </template>
        </Dropdown>
      </button>

      <button class="btn-container">
        <Dropdown :is-icon="false" class="dropDown-icon">
          <template class="dropDown-icon" slot="btn">
            <img :src="image" alt />
            <span>James Siegel</span>
            <font-awesome-icon icon="angle-down" />
          </template>
          <template slot="body">
            <div class="logout-div" v-on:click="getLogout">logout</div>
          </template>
        </Dropdown>
      </button>
    </div>
  </div>
</template>

<script>
import image from "../assets/manphoto.jpg";
import Dropdown from "bp-vuejs-dropdown";

export default {
  name: "Header",
  data: function() {
    return {
      image: image
    };
  },
  methods: {
    getLogout() {
      if (confirm("Are you sure you want to logout")) {
        console.log("You have logout");
      } else {
        console.log("You are still online");
      }
    }
  },
  components: {
    Dropdown
  }
};
</script>

<style>
.container {
  display: inline-block;
  background: #ff1493;
  width: 100vw;
}

.container .svg-inline--fa {
  color: white;
}

.seach-container {
  margin-top: 2vw;
  width: 45vw;
  height: 5vw;
  padding: 10px;
  display: inline-block;
  text-align: right;
}

.header-icons {
  width: 45vw;
  display: inline-block;
  color: white;
  text-align: right;
}
.header-icons * {
  padding-left: 10px;
  vertical-align: middle;
}

span {
  color: white;
  font-size: 120%;
}

img {
  border-radius: 50%;
  width: 6vw;
  height: 6vw;
}

.btn-container {
  background-color: #ff1493;
  border: none;
  color: white;
}

li {
  color: black;
}

ul {
  list-style-type: none;
}

.bp-dropdown__btn {
  border: none;
}

.logout-div {
  color: black;
}
</style>
