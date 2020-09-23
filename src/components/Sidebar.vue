<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div :class="{ 'sidebar-opened': isPanelOpen }" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";
export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-10%);
  transition: all 150ms ease-in 0s;
}
#sidebar-icon {
  position: fixed;
  top: 0;
  display: flex;
  height: 100vh;
  width: 50px;
  text-align: center;
  z-index: 999;
  background: green;
}
.sidebar-backdrop {
  /* background-color: rgba(19, 15, 64, .4); */
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}
.sidebar-panel {
  transition: all 150ms ease-in 0s;
  overflow-y: auto;
  background-color: blue;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 998;
  padding: 3rem 20px 2rem 20px;
  width: 40px;
}
.sidebar-opened {
  /* transform: translateX(100%); */
  transition: all 150ms ease-in 0s;
  overflow-y: auto;
  background-color: red;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 998;
  padding: 3rem 20px 2rem 20px;
  width: 320px;
}
</style>
