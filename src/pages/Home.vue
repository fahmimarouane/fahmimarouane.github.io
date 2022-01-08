<template>
<div>
  <nav>
    <div class="logo">
      <p>SNCF</p>
    </div>
    <ul>
      <li><a href="" class="active">home</a></li>
      <li><router-link to="/close-buy"> User Location</router-link></li>
      <li><router-link to="/service">Services</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
  
  <div class="image">
    <img src="../assets/tgv.jpeg" />
  </div>
</div>
</template>


<style>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /*background: url(bg.jpg) no-repeat;*/
  background-size: cover;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
nav {
  width: 100%;
  height: 75px;
  background-color: rgba(62, 62, 63, 0.5);
  line-height: 75px;
  padding: 0px 0px;
  position: fixed;
  z-index: 1;
}
nav .logo {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1.5px;
}
nav .logo p {
  float: left;
  color: #fff;
  text-transform: uppercase;
}
nav ul {
  float: right;
}
nav ul li {
  display: inline-block;
  list-style: none;
}
nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  padding: 0px 32px;
}
nav ul li a:hover {
  color: #c0d96f;
}
nav ul li .active {
  color: #c0d96f;
}
.image img {
  width: 100%;
  height: 0px auto;
  opacity: 0.8;
}
</style>