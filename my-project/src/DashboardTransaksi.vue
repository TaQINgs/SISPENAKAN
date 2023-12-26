<template>
    <div class="wrapper ">
      <div class="sidebar" data-color="white" data-active-color="danger">
        <div class="logo">
          <a href="https://www.creative-tim.com" class="simple-text logo-mini">
            <div class="logo-image-small">
              <img src="assets/img/logo-small.png">
            </div>
          
          </a>
          <a href="https://www.creative-tim.com" class="simple-text logo-normal">
            SISPENAKAN
          </a>
        </div>
        <Sidebar />
      </div>
      <div class="main-panel">
        <Nav />
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
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  