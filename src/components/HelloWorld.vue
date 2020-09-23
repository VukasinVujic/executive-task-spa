<template>
  <div class="hello">
    <div class="naslov">
      <font-awesome-icon icon="list-alt" />
      <h1>{{ title }}</h1>
      <font-awesome-icon class="tri-dot-menu" icon="ellipsis-h" />
    </div>
    <textarea :placeholder="msg"></textarea>
    <hr />
    <div class="footer">
      <font-awesome-icon icon="image" />
      <font-awesome-icon icon="video" />
      <font-awesome-icon icon="volume-up" />
      <font-awesome-icon icon="pencil-alt" />

      <button class="post_button">
        <b>{{buttontext}}</b>
      </button>
    </div>

    <div class="ikonice">
      <font-awesome-icon v-if="trophy" class="ikonica" icon="trophy" />
      <font-awesome-icon v-if="heart" class="ikonica" icon="heart" />
      <font-awesome-icon v-if="comment" class="ikonica" icon="comment" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    buttontext: String,
    msg: String,
    trophy: Boolean,
    heart: Boolean,
    comment: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: white;
  position: relative;
  width: 80%;
  margin-left: 5vw;
  text-align: left;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.naslov {
  display: block;
  text-align: left;
}

.naslov > h1,
.naslov > a.svg-inline--fa {
  display: inline-block;
  margin: 10px;
}

textarea {
  width: 99%;
  font-size: 1rem;
  resize: none;
  border: none;
  height: 6rem;
}

.footer {
  margin: 10px;
}

.footer > .svg-inline--fa {
  margin-right: 10px;
}

hr {
  /* margin-left: 30px; */
  /* margin-right: 30px; */
  color: #eeeeee;
}

button {
  border: none;
  background: #ff1493;
  float: right;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
}

.tri-dot-menu {
  color: black;
  float: right;
  margin-right: 10px;
}

.ikonice {
  position: absolute;
  top: 15px;
  right: -16px;
  display: block;
}

.ikonica {
  background: #ff1493;
  color: white;
  margin-top: 8px;
  padding: 8px;
  border-radius: 100%;
  display: block;
}
</style>