<template >
<div class="card" style="width: 18rem;" v-for="movie in movies" :key="movie">
  <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
  <div class="card-body">
    <h5 class="card-title">{{movie.title}}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/`)

      this.movies = res.data;
    } catch (e) {
      console.error(e)
    }
    console.log(this.movies[0].rank)
  }
  
}

</script>

