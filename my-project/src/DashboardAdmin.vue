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
        <!-- Admin -->
        <Transaksi />
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "./components/Sidebar.vue";
  import Nav from "./components/Nav.vue";
  import Footer from "./components/Footer.vue";
  
  //Admin
  import Transaksi from './views/admin/Transaksi.vue';
  
  
  export default {
    name: 'App',
    components: {
    Sidebar,
    Nav,
    Footer,
    // admin
    Transaksi,
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
  