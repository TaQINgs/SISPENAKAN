<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="landing-page">
        <section class="navbar">
            <div class="logo"></div>
            <div class="button">
                <router-link to="/" class="button-link">
                    <span class="text">Beranda</span>
                </router-link>
            </div>
        </section>

        <div style="overflow: hidden;">
            <section style="float: left; width: 50%;">
                <!-- Left Section Content -->
                <div>
                    <div class="campaigns-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card move-on-hover">
                                        <div class="card-body">
                                            <img :src="getImageUrl(responseData.bukti1)" alt="">
                                            <br>
                                            <br>
                                            <p style="text-align: justify; color:black">
                                            <center>{{ responseData.tujuan_donasi }}</center>
                                            </p>
                                            <hr>
                                            <p style="text-align: left; color:black">
                                                <b>Alasan Donasi: {{ responseData.alasan }}</b>
                                            </p>
                                            <h5 style="text-align: left; color: black; font-size: 15px;">Target    : Rp {{ responseData.nominal }}</h5>
                                            <h5 style="text-align: left; color: black; font-size: 15px;">Terkumpul : Rp {{ responseData.donasi }} </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!--  -->

            <section style="float: right; width: 50%;">
                <!-- Right Section Content -->
                <div>
                    <div class="campaigns-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card move-on-hover">
                                        <div class="card-body">
                                            <p style="text-align: left; color:black">
                                                <center>
                                                <b>Bukti Penyerahan Donasi</b>
                                                <br>
                                                <br>
                                            <img :src="getImageUrl(responseData.bukti2)" alt="">
                                                    </center>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
           
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      responseData: [],
    };
  },
  mounted() {   
    // Fetch data from the backend API
    this.getDataFromBackend();
  },
  methods: {
    getDataFromBackend() {
    //   const id = 1; // Replace with the desired ID to fetch data for
      axios
        .get(`http://127.0.0.1:8000/api/getDataLaporan/${this.$route.params.id}`)
        .then((response) => {
            console.log(response.data);
          // Update the responseData with the fetched data
          this.responseData = response.data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
    getImageUrl(filename) {
      return `http://127.0.0.1:8000/storage/bukti_donasi/${filename}`;
    },
    getImageUrl2(filename) {
      return `http://127.0.0.1:8000/storage/app/${filename}`;
    },
  },
};
</script>