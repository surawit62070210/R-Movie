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
  <nav class="navbar navbar-light" style="padding-right: 1%; background-color: black">
  <form class="form-inline">
    <div class="input-group">
    <input class="form-control mr-sm-2" type="search" placeholder="Movie Search" aria-label="Search">
    <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </div>
  </form>
  </nav>
</nav>
  </div>

  </body>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};

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
