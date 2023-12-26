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
        <MasterUser />
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "./components/Sidebar.vue";
  import Nav from "./components/Nav.vue";
  import Footer from "./components/Footer.vue";
  
  //Admin
  import MasterUser from './views/admin/MasterUser.vue';
  
  
  export default {
    name: 'App',
    components: {
    Sidebar,
    Nav,
    Footer,
    // admin
    MasterUser,
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
  