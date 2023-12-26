<template>
    <div class="wrapper ">
      <div class="sidebar" data-color="white" data-active-color="danger">
        <div class="logo">
        </div>
        <Sidebar />
      </div>
      <div class="main-panel">
        <Nav />
        <br>
        <br>
        <br>
        <br>
        <br>
        <!-- Admin -->
        <DataUser />
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "./components/Sidebar.vue";
  import Nav from "./components/Nav.vue";
  import Footer from "./components/Footer.vue";
  
  //Admin
  import DataUser from './views/admin/DataUser.vue';
  
  
  export default {
    name: 'App',
    components: {
    Sidebar,
    Nav,
    Footer,
    // admin
    DataUser,
},
  };
  
  
  </script>
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    
    margin-top: 60px;
  }
  
  </style>
  