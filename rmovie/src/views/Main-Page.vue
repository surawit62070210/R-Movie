<template>
<body>
  <div class="container"> 
    
    <div class="row">
     <!-- <carousel v-bind:per-page-custom=[[780,5]]> -->
      
        <div
        class="col" v-for="(movie, index) in movies.slice(0,15)"
        :key="index" 
      >
       <!-- <slide> -->
        <div class="card" style="width: 15rem">
          <img class="card-img-top" :src="movie.image1" alt="Card image cap" style="max-height: 300px" />
          <div class="card-body">
            <h1 class="card-title" style="font-size: 17px; font-weight: 600">{{movie.title}}</h1>
            <a href="/random" class="btn btn-warning" style="color: white">Watch</a>
          </div>
        </div>
       <!-- </slide>  -->
      </div>
      
      
      <!-- </carousel> -->
    </div>
  </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(process.env.VUE_APP_HOST +'get');

      this.movies = res.data;
    } catch (e) {
      console.error(e);
    }
    console.log(this.movies[0].rank);
  },
};
</script>

<style scoped>
body {
  width: 100%;
  background-color: rgb(255, 255, 255);
}
</style>