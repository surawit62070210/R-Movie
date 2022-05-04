<template>
  <body>
 <div class="check">

<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" style="max-width: 75%">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{ blog.title }}&nbsp;</h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col">
                    <img class="modal-image" :src="blog.image2" alt="Card image cap"
                      style="max-height: 350px;min-height: 350px;min-width: 650px;max-width:650px" />
                    <p>{{ blog.crew }}</p>
                    <iframe width="650" height="350" :src="blog.trailer"></iframe>
                    <p>{{ blog.title }} Trailer</p>
                  </div>
                  <div class="col">
                    <h5 class="modal-title">{{ blog.fullTitle }}</h5>
                    <p>IMDb {{ blog.imDbRating }}/10</p>
                    <p>{{ blog.crew }}</p>
                    <p>{{ blog.storyline }}</p>
                    <h5>User Comment</h5>
                    <b-input-group :prepend="this.$users.user_name " class="mt-3">
                      <b-form-input v-model="comment"></b-form-input>
                      <b-input-group-append > 
                        <b-button @click="addComment()" variant="outline-success">Comment</b-button>
                      </b-input-group-append>
                    </b-input-group>

                    <div class="card" v-for="(com, index) in comments" :key="index">
                      <div class="card-body">
                        <p>{{com.comment}}</p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex flex-row align-items-center">
                            <img :src="getAvata(com.comment_by_email)" alt="avatar" width="25"
                              height="25" />
                            <p class="small mb-0 ms-2">{{com.comment_by_email}}</p>
                          </div>
                          <div class="d-flex flex-row align-items-center text-primary">
                            <p>{{com.created_on}}</p>
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


    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Drama" v-model="random">
  <label class="form-check-label" for="inlineCheckbox1">Drama</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Action" v-model="random">
  <label class="form-check-label" for="inlineCheckbox2">Action</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Crime" v-model="random">
  <label class="form-check-label" for="inlineCheckbox2">Crime</label>
</div>
<div>
  <span style="color: white">Checked names: {{ randommovies.length }}</span>
  <a  class="btn btn-warning" href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal"
    style="color: white; width: 100%"  @click="randommovie()">RANDOM MOVIE</a>
</div>
</div>
  </body>
</template>

<script>
import axios from "axios";
import { jwtDecode } from "../components/jwt-decode";
export default {
  data() {
    return {
      movies: [],
      blog: "",
      poppulars: [],
      dramas: [],
      crimes: [],
      comment:"",
      comments:[],
      actions: [],
      random: [],
      randommovies: []
    };
  },
  async created() {
    try {
      const res = await axios.get(process.env.VUE_APP_HOST + 'get');
      this.movies = res.data;
    } catch (e) {
      console.error(e);
    }
    this.tagmovie()
    this.dramamovie()
    this.crimemovie()
    this.actionmovie()
},
  methods: {
    getAvata(name){
      return "https://avatars.dicebear.com/api/big-ears/"+name+".svg"
    },
    addComment(){
      if(this.comment == ''){
        alert("กรุณาพิมพ์ข้อความ")
        return
      }else{
        axios.post(process.env.VUE_APP_HOST+"comment/create", {
          movieId : this.blog.id,
          comment_by_email: this.$users.user_email,
          comment: this.comment
        }).then((res) =>{
          if(res){
            this.getComments()
            alert('บันทึกข้อความสำเร็จ')
          }
        }).catch((error) =>{
          alert(error)
          console.log(error)
        })
      }
      console.log(this.$users)
    },
    getComments(){
      axios.get(process.env.VUE_APP_HOST+`comment/${this.blog.id}`).then((res) =>{
        this.comments = res.data
      }).catch((error) => console.log(error))
    },
    getmovie(movie) {
      this.comment = ''
      this.blog = movie
      this.getComments()

    },
    tagmovie() {
      this.poppulars = this.movies.filter(movie => {
       if ((parseInt(movie.imDbRatingCount)) > 1300000) {
         return movie
       }
      })
    },
    dramamovie() {
        this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Drama'){
            this.dramas.push(movie)
          }
        });
          }
        })
      console.log(this.randommovies)
    },
    crimemovie() {
        this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Crime'){
            this.crimes.push(movie)
          }
        });
          }
        })
      // console.log(this.dramas)
    },
    actionmovie() {
        this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          if(element == 'Action'){
            this.actions.push(movie)
          }
        });
          }
        })
      // console.log(this.dramas)
    },
    randommovie() {
        this.movies.forEach(movie =>{
          if(movie.Genre != undefined){

        (movie.Genre).forEach(element => {
          this.random.forEach(ran => {
            if(element == ran){
              this.randommovies.push(movie)
            }
          })
        });
          }
        })
      // console.log(this.dramas)
      this.blog = this.randommovies[Math.floor(Math.random() * this.randommovies.length)]
      this.comment = ''
      this.getComments()
      this.randommovies = []
    }
  }
};
</script>

<style scoped>
body {
  background: url("thumb-1920-414434.jpg") no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
 }
 .check {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .form-check-label {
   color: white;
   font-size: 25px;
   margin-left: 10px;
 }
 .form-check-input {
   width: 30px;
   height: 30px;
 }

</style>