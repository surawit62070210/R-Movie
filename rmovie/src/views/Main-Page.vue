<template>
<body>
  <div class="container"> 
    <div class="row">
     <carousel :per-page="5"  :autoplay="false" :loop="true" :autoplayHoverPause="true">
        <slide
        class="col" v-for="(movie, index) in movies.slice(0,15)"
        :key="index" 
      >
        <div class="card" id="blog" style="width: 15rem">
          <img class="card-img-top" :src="movie.image1" alt="Card image cap" style="max-height: 300px" />
          <div class="card-body">
            <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{movie.title}}</h1>
            <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning" style="color: white; width: 100%" @click="getmovie(movie)">Watch</a>
          </div>
        </div>
      </slide>
      </carousel>

      <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" style="max-width: 75%">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{blog.title}}&nbsp;</h5>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col">
            <img class="modal-image" :src="blog.image2" alt="Card image cap" style="max-height: 350px;min-height: 350px;min-width: 650px;max-width:650px" />
            <p>{{blog.crew}}</p>
            <iframe width="650" height="350" :src="blog.trailer"></iframe>
            <p>{{blog.title}} Trailer</p>
          </div>
          <div class="col">
            <h5 class="modal-title">{{blog.fullTitle}}</h5>
            <p>IMDb {{blog.imDbRating}}/10</p>
            <p>{{blog.crew}}</p>
            <p>{{blog.storyline}}</p>
            <h5>User Comment</h5>
        
        <div class="card">
          <div class="card-body">
            
            <p>Type your note, and hit enter to add it</p>
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <img src="https://avatars.dicebear.com/api/big-ears/.svg" alt="avatar" width="25"
                  height="25" />
                <p class="small mb-0 ms-2">Mary Kate</p>
              </div>
              <div class="d-flex flex-row align-items-center text-primary">
                <p>19:00</p>
              </div>
              
            </div>
          </div>
        </div>

      

          </div>
        </div>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

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
      blog: ""
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
  methods: {
    getmovie(movie){
      this.blog = movie
      console.log(movie)
    }
  }
};
</script>

<style scoped>
body {
  width: 100%;
  background-color: rgb(255, 255, 255);
}
#blog:hover{
 background-color: #ffe880;
}
</style>