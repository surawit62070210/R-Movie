<template>

  <body>
    <div class="container">
      <div class="row">
        <div class="mt-5">
          <h1 class="mb-4">All Movies</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(movie, index) in movies.slice(0, 15)" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="movie.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">
                  {{ movie.title }}
                </h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(movie)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5">
          <h1 class="mb-4">Popular</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(poppular, index) in poppulars" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="poppular.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ poppular.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(poppular)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Drama</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(drama, index) in dramas" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="drama.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ drama.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(drama)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Crime</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(crime, index) in crimes" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="crime.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ crime.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(crime)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

        <div class="mt-5 mb-5">
          <h1 class="mb-4">Action</h1>
        <carousel :per-page="5" :autoplay="false" :loop="true" :autoplayHoverPause="true">
          <slide class="col" v-for="(action, index) in actions" :key="index">
            <div class="card" id="blog" style="width: 15rem">
              <img class="card-img-top" :src="action.image1" alt="Card image cap" style="max-height: 300px" />
              <div class="card-body">
                <h1 class="card-title" style="font-size: 17px; font-weight: 600; min-height: 40px">{{ action.title }}</h1>
                <a href="#exampleModal5" data-bs-target="#exampleModal5" data-bs-toggle="modal" class="btn btn-warning"
                  style="color: white; width: 100%" @click="getmovie(action)">Watch</a>
              </div>
            </div>
          </slide>
        </carousel>
        </div>

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
                    <img class="modal-image" :src="blog.image2" alt="Card image cap" style="
                        max-height: 350px;
                        min-height: 350px;
                        min-width: 650px;
                        max-width: 650px;
                      " />
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
                    <b-input-group style="margin-bottom: 15px;" :prepend="name" class="mt-3">
                      <b-form-input v-model="comment"></b-form-input>
                      <b-input-group-append>
                        <b-button @click="addComment()" variant="outline-success">Comment</b-button>
                      </b-input-group-append>
                    </b-input-group>

                    <div class="card " style="margin-bottom: 10px;" v-for="(com, index) in comments" :key="index">

                      <div class="card-body "  >
                        <p>{{ com.comment }}</p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex flex-row align-items-center">
                            <img :src="getAvata(name)" alt="avatar" width="50" height="50" />
                            <h3 class="small mb-0 ms-2">
                              {{ com.comment_by_email }}
                            </h3>
                          </div>
                          <div class="d-flex flex-row align-items-center text-primary">
                            <b-button variant="danger" @click="deleteComment(com)">X</b-button>
                          </div>
                        </div>
                      </div>
                      <template class="footer">
                        <em>{{ setTime(com.created_on) }}</em>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { jwtDecode } from "../components/jwt-decode";
import axios from "axios";
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
      token: "",
      user: "",
      name:"",
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

  updated() {
    this.checkLogin()
    if (this.$cookies.get('refresh_token') == null) {
      this.token = null
      this.user = null
    }
  },
  methods: {
    getAvata(name) {
      return "https://avatars.dicebear.com/api/big-ears/" + name + ".svg";
    },
    addComment() {
      console.log(this.token);

      if (this.comment == "") {
        alert("กรุณาพิมพ์ข้อความ");
        return;
      } else {
        this.user = jwtDecode(this.token)
        if (this.token != null) {
          axios
            .post(
              process.env.VUE_APP_HOST + "comment/create",
              {
                movieId: this.blog.id,
                comment_by_email: this.user.user_email,
                comment: this.comment,
              },
              {
                headers: {
                  Authorization: `Bearer ${this.token}`,
                },
              }
            )
            .then((res) => {
              if (res) {
                this.getComments();
                alert("บันทึกข้อความสำเร็จ");
              }
            })
            .catch((error) => {
              alert(error);
              console.log(error);
            });
        } else {
          alert("กรุณา login")
        }
      }
    },
    deleteComment(com) {
      console.log(process.env.VUE_APP_HOST + 'comment/' + com.comment_id + '/' + this.user.user_email)
      axios.delete(process.env.VUE_APP_HOST + 'comment/' + com.comment_id + '/' + this.user.user_email, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }).then((res) => {
        alert(res.data)
        this.getComments()
      }).catch(error => alert("ไม่สามารถลบได้"))
    },

    getComments() {
      axios
        .get(process.env.VUE_APP_HOST + `comment/${this.blog.id}`)
        .then((res) => {
          this.comments = res.data;
        })
        .catch((error) => console.log(error));
    },
    checkLogin() {
      if (this.$cookies.get("refresh_token") != null) {
        axios
          .get(process.env.VUE_APP_HOST + "auth/refresh_token", {
            headers: {
              Authorization: `Bearer ${this.$cookies.get("refresh_token")}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.token = res.data.accessToken;
              this.$cookies.set("refresh_token", res.data.refreshToken);
              this.user = jwtDecode(res.data.accessToken);
              this.name = this.user.user_name;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

    },
    setTime(time) {
      var day = time.split('T')[0]
      var t = time.split('T')[1].split('.')[0]
      return day + " " + t
    },

    getmovie(movie) {
      this.comment = "";
      this.blog = movie;
      this.getComments();
    },    tagmovie() {
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
      // console.log(this.dramas)
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
    this.checkLogin()
  },
  },
};
</script>

<style scoped>
body {
  width: 100%;
  background-color: rgb(0, 0, 0);
}

#blog:hover {
  background-color: #ffe880;
}

.mb-4 {
  text-align: left;
  color: white;
}
</style>
