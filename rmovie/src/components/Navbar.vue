
<template>
<body>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black; height: 70px">
      <img src="../assets/rmovieslogo.jpg" class="img-fluid" alt="Responsive image" style="padding-left: 0.5%">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="nav navbar-nav"  style="font-size: 17px; margin-left: 20px">
      <li class="nav-item">
        <a class="nav-link" href="/" style="margin-right: 15px" id="nav1">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/random" style="margin-right: 15px" id="nav1">Random Movie</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about" id="nav1">About Us</a>
      </li>
    </ul>
  </div>
  <nav class="navbar navbar-light" style="margin-right: 20px; background-color: black">
  <form class="form-inline">
    <div class="input-group">
    <input class="form-control mr-sm-2" type="search" placeholder="Movie Search" aria-label="Search">
    <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </div>
  </form>
  </nav>
  
  <button type="button" v-if="!auth" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#loginModal" style="margin-right: 20px">
  Login
</button>

<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 350px">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3 justify-content-end">
            <label class="col-form-label d-flex" for="defaultForm-email" >Email</label>
            <input type="email" id="defaultForm-email" class="form-control validate" v-model="email" placeholder="Your email...">
          </div>
          <div class="mb-3">
            <label class="col-form-label d-flex" for="defaultForm-pass">Password</label>
            <input type="password" id="defaultForm-pass" class="form-control validate" v-model="password" placeholder="Your password...">
          </div>
          <button type="button" class="mb-1 mt-3 btn btn-warning" style="color: white; width: 100%" @click="login()">Login</button>
        </form>
      </div>
      <div class="modal-footer justify-content-center">
        
        <div class="signup-section">Not a member yet? <a href="#exampleModal" class="text-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</a>.</div>
      </div>
    </div>
  </div>
</div>

<button type="button" v-if="!auth" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#signup" style="margin-right: 20px">
  Sign Up
</button>

<div class="modal fade" ref="signup" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 450px">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel2">Sign up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-2">
            <label class="col-form-label d-flex" for="defaultForm-firstname" >Firstname</label>
            <input type="text" id="defaultForm-firstname" class="form-control validate" v-model="first_name" placeholder="Your Firstname...">
          </div>
          <div class="mb-2">
            <label class="col-form-label d-flex" for="defaultForm-lastname" >Lastname</label>
            <input type="text" id="defaultForm-lastname" class="form-control validate" v-model="last_name" placeholder="Your Lastname...">
          </div>
          <div class="mb-2">
            <label class="col-form-label d-flex" for="defaultForm-nickname" >Username</label>
            <input type="text" id="defaultForm-nickname" class="form-control validate" v-model="username" placeholder="Your Lastname...">
          </div>
          <div class="mb-2">
            <label class="col-form-label d-flex" for="defaultForm-email" >Email</label>
            <input type="email" id="defaultForm-email" class="form-control validate" v-model="email" placeholder="Your email...">
          </div>
            <div class="mb-2">
            <label class="col-form-label d-flex" for="defaultForm-email" >Mobile</label>
            <input type="mobile" id="defaultForm-email" class="form-control validate" v-model="mobile" placeholder="Your mobile...">
          </div>
          <div class="mb-2">
            <label class="col-form-label d-flex" for="defaultForm-pass">Password</label>
            <input type="text" id="defaultForm-pass" class="form-control validate" v-model="password" placeholder="Your password...">
          </div>
          <div class="mb-2">
          <label class="col-form-label d-flex" for="defaultForm-date">Birthday</label>
          <date-picker v-model="date" valueType="date" id="defaultForm-date" style="width: 100%" placeholder="Select date..."></date-picker>
          </div>
          <button type="button" class="mb-1 mt-3 btn btn-warning" style="color: white; width: 100%" @click="submit()">Sign up</button>
        </form>
      </div>
      <div class="modal-footer justify-content-center">
        
        <div class="signup-section">Already a member? <a href="#exampleModal" class="text-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign in</a>.</div>
      </div>
    </div>
  </div>
</div>

</nav>

</div>
  </body>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import {jwtDecode} from "./jwt-decode.js";
export default {
    components: { DatePicker },
    data() {
      return {
        date: null,
        username:"",
        email:"",
        first_name:"",
        last_name:"",
        password:"",
        mobile:"",
        auth:false       
      };
    },methods:{
      submit(){
        axios.post(process.env.VUE_APP_HOST+"users", {
          user_name: this.username,
          user_email: this.email,
          user_password: this.password,
          user_mobile: this.mobile,
          user_firstname: this.first_name,
          user_lastname: this.last_name,
          user_birthday: this.date
        }).then((res) => {
          this.$accessToken = res.data.accessToken
          alert("สมัครสมาชิกสำเร็จ")
          this.username = ''
          this.email = ''
          this.password = ''
          this.mobile = ''
          this.first_name = ''
          this.last_name = ''
          this.date = ''
        })
        .catch((error) => {
          console.log(error.response.data)
        })
      },
      login(){
        axios.post(process.env.VUE_APP_HOST+"auth/login", {email:this.email, password:this.password}).then((res)=>
        {
          this.$cookies.set('refresh_token', res.data.refreshToken)
          this.$accessToken = res.data.accessToken
          this.email = ''
          this.password = '' 
          console.log(res.data)
          alert("ล็อคอินสำเร็จ")
        },
        )
        // axios.get(process.env.VUE_APP_HOST+'users', {
        // headers: {
        //    'Authorization': `Bearer ${this.$accessToken}`
        //   }}
        // ).then((res)=>{
        //   console.log(res.data)
        // }).catch(error => {console.log(error)})
        // }
        
        // axios.get(process.env.VUE_APP_HOST+"auth/refresh_token", {
        //   headers: {
        //    'Authorization': `Bearer ${this.$cookies.get('refresh_token')}`
        //   }}
        // ).then((res)=>{console.log(res)}).catch(error =>{console.log(error)})
      }
    }
    // ,mounted:{

    // }
  };
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

</script>

<style scoped>
.all {
  width: 100%
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
}
#nav1:hover {
  font-weight: 600;
  color: white;
}
.active {
  font-size: 50%;
}
</style>
