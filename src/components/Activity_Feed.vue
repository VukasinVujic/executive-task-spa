<template>
  <div class="activity-feed">
    <div class="container-activity">
      <h1>Activity_Feed</h1>
    </div>
    <div style="width: 80%">
      <ul id="list-items">
        <li class="text-picture-item" v-for="(item, index) in items" :key="index">
          <div>
            <img class="image-item" :src="item.image" alt />
            <span class="text-item">{{item.text}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
          text: "some text some text some text"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
          text: "some text some text some text"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
          text: "some text some text some text"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
          text: "some text some text some text"
        }
      ]
    };
  },
  // methods: {
  //     oneElement(index){
  //         return <li> </li>
  //     }
  // }

  name: "Activity_Feed"
};
</script>


<style>
.container-activity {
  background: lightblue;
}

.text-picture-item {
  width: 100px;
}

.text-item {
  color: black;
}

.image-item {
  display: inline;
}

.activity-feed {
  margin-left: 20%;
  width: 60%;
}
</style>