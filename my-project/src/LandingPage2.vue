<template>
    <div class="landing-page">
        <section class="navbar">
            <div class="logo"></div>
            <div class="button">
              <router-link to="/" class="button-link">
                <span class="text">Beranda</span>
              </router-link>
              <router-link to="/Pengajuan" class="button-link">
                <span class="text">Hubungi Kami</span>
              </router-link>
              <router-link to="/Pengajuan" class="button-link">
                <span class="text">Pengajuan</span>
              </router-link>
                <span class="text" @click="logoutUser">LogOut</span>
            </div>
          </section>
  
      <section class="bg-1">
        <div class="bg-2"></div>
        <div class="padding-bg-1">
          <span class="text-padding-bg-1">Rp 29.000.000<br><span class="additional-text">Terkumpul</span></span>
  
  
          <span class="text-padding-bg-1">729<br><span class="additional-text"> Donatur</span></span>
  
  
          <span class="text-padding-bg-1">49<br><span class="additional-text">Program</span></span>
  
        </div>
      </section>
  
      <section class="padding-bg-2">
        <span class="text-padding-bg-2">BERBAGI APA HARI INI?<br><span class="additional-text-2">Berdonasi Mewujudkan
            Pendidikan Bermutu</span></span>
        <div class="padding-bg-3">
          <div class="campaigns-section">
            <div class="container">
              <div class="row mt-4">
                <div class="col-md-4" v-for="campaign in campaigns" :key="campaign.id">
                  <div class="card move-on-hover">
                    <img class="card-img-top" :src="getImageUrl(campaign.bukti1)" alt="aboutus">
                    <div class="card-body">
                      <h6 class="card-title">{{ campaign.alasan }}</h6>
                      <p class="card-text">Terkumpul</p>
                      <router-link :to="`/FormDonasi/${campaign.id}`" class="btn bg-gradient-primary w-100 my-4 mb-2">
                        DONASI SEKARANG
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="padding-bg-5">
          <span class="text-padding-bg-5">Lihat Semua Program Yang Sudah Diselenggarakan</span>
          <span class="button-link-bg-5">
            <router-link to="/Program"><span class="text-padding-bg-5-2">Lihat Semua Program</span></router-link>
          </span>
        </div>
      </section>
  
      <section class="padding-bg-2">
        <span class="text-padding-bg-2">PROGRAM YANG TELAH SELESAI<br><span class="additional-text-2">TERIMAKASIH ATAS
            BANTUANNYA</span></span>
        <div class="padding-bg-3">
          <div class="campaigns-section">
            <div class="container">
              <div class="row mt-4">
                <div class="col-md-4" v-for="campaign in laporan" :key="campaign.id">
                  <div class="card move-on-hover">
                    <img class="card-img-top" :src="getImageUrl(campaign.bukti1)" alt="aboutus">
                    <div class="card-body">
                      <h6 class="card-title">{{ campaign.alasan }}</h6>
                      <p class="card-text">Terkumpul</p>
                      <router-link to="/lihatlaporan" class="btn bg-gradient-primary w-100 my-4 mb-2">
                        DONASI SEKARANG
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="padding-bg-7">
    <div class="left-section">
      <div class="logoFooter"></div>
      <div class="textFooter">Situs galang dana online untuk membantu individu yang membutuhkan dalam bidang pendidikan.</div>
    </div>
    <div class="right-section">
      <div class="sebelahkanan">
        <div class="item">
          <div class="logoFooter2"></div>
          <div class="textkanan"> sispenakan.com</div>
        </div>
        <div class="item">
          <div class="logoFooter3"></div>
          <div class="textkanan"> +62 8 123 4567 8910</div>
        </div>
        <div class="item">
          <div class="logoFooter4"> </div>
          <div class="textkanan"> Jl. Umban Sari, Gg.Perkasa Sari, No. 29</div>
        </div>
        <div class="item">
          <div class="logoFooter5"> </div>
          <div class="textkanan"> sispenakan@gmail.com</div>
        </div>
      </div>
    </div>
  </section>
  
  
    </div>
  </template>
  
  <style>
  .landing-page {
    width: 100%;
    height: 2564px;
    background: #FFF;
  }
  
  .bg-1 {
    width: 1291px;
    height: 448px;
    
  }
  
  .bg-2 {
    width: 1291px;
    height: 448px;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(/public/assets/img/image10.png), lightgray 50% / cover no-repeat;
  }
  
  .padding-bg-1 {
    width: 1102px;
    height: 133px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #A0C087;
    position: absolute;
    bottom: 55px;
    /* Adjust the desired position from the bottom */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .button {
    display: flex;
    flex-direction: row;
  }
  
  .button-link {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 10px 20px;
    background-color: none;
    border-radius: 15px;
    font-family: Rounded Mplus 1c Bold;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
  
  .text-padding-bg-1 {
    color: #FFF;
    font-family: Rounded Mplus 1c Bold;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* Adjust the line-height as needed */
    text-align: center;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
    /* Add the desired spacing between lines */
    margin-right: 150px;
    margin-left: 150px;
  }
  
  .text-padding-bg-2 {
    color: #21421E;
    font-family: Rounded Mplus 1c Bold;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* Add this line */
    margin-bottom: 0;
    /* Remove the margin-bottom */
    margin-right: auto;
    margin-left: 800px;
    margin-top: 200px;
  }
  
  .additional-text {
    color: #FFF;
    font-family: Rounded Mplus 1c Bold;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* Add the desired spacing between main text and additional text */
  }
  
  .additional-text-2 {
    color: #767676;
    font-family: Rounded Mplus 1c Bold;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* Add the desired spacing between main text and additional text */
  }
  
  .padding-bg-2 {
    width: 96px;
    height: 900px;
    color: #FFF;
  }
  
  .padding-bg-7 {
    width: 100%;
    height: 370px;
    background: #5E9859;
    display: flex;
  }
  
  .left-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 86px;
    padding-right: 20px;
  }
  
  .campaigns-section {
    background-color: #f0f0f0;
    padding: 50px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    color: #21421E;
  }
  
  .section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .lead {
    font-size: 16px;
    color: #888;
    margin-bottom: 30px;
  }
  
  .card {
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    margin-bottom: 30px;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-img-top {
    border-radius: 8px 8px 0 0;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #1e8057;
    background-color: #42b983;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #1e8057;
  }
  
  
  .padding-bg-3 {
    width: 1374px;
    height: 547px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #767676;
    margin-left: 95px;
  }
  
  .padding-bg-4 {
    width: 412px;
    height: 480px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FDFDFD;
    margin-left: 25px;
    margin-bottom: 5px;
  }
  
  .padding-bg-5 {
    width: 1268px;
    height: 96px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #F1F8EC;
    margin-top: 300px;
    margin-left: 86px;
    margin-right: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .text-padding-bg-5 {
    color: #767676;
    font-family: Rounded Mplus 1c Bold;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-right: 390px;
  }
  
  .text-padding-bg-5-2 {
    color: #FFF;
    font-family: Rounded Mplus 1c Bold;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-left: 10px;
  }
  
  .button-link-bg-5 {
    width: 366px;
    height: 33px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #E66;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  
  
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  
  
  .section-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .campaigns-section {
    background-color: #fff;
    padding: 40px 0;
  }
  
  .card {
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-img-top {
    border-radius: 8px 8px 0 0;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 14px;
    color: #888;
  }
  
  .header {
    width: 1291px;
    height: 448px;
    flex-shrink: 0;
    border-radius: 30px;
    background: url(/public/assets/img/image10.png), lightgray 50% / cover no-repeat;
  }
  
  .navbar {
    width: 100%;
    height: 119px;
    background: #5E9859;
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .logo {
    width: 347px;
    height: 75px;
    background: url(/public/assets/img/SISPENAKAN1.png), lightgray 50% / cover no-repeat;
  }
  
  
  .logoFooter {
    width: 347px;
    height: 75px;
    background: url(/public/assets/img/SISPENAKAN1.png),
      lightgray 50% / cover no-repeat;
    margin-bottom: 20px;
  }
  
  .textFooter {
    color: #fff;
    font-family: Rounded Mplus 1c Bold;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }
  .sebelahkanan {
    display: flex;
    flex-direction: column;
  }
  
  .right-section {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 86px;
  }
  
  .textkanan {
    color: #fff;
    font-family: Rounded Mplus 1c Bold;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-top: 8px;
  }
  
  .logoFooter2 {
    width: 31px;
    height: 31px;
    background: url(/public/assets/img/image9.png), #5E9859 50% / cover fixed;
  }
  
  .logoFooter3 {
    width: 25px;
    height: 33px;
    background: url(/public/assets/img/image32.png), #5E9859 50% / cover fixed;
  }
  
  .logoFooter4 {
    width: 29px;
    height: 29px;
    background: url(/public/assets/img/globe.png), #5E9859 50% / cover fixed;
  }
  
  .logoFooter5 {
    width: 29px;
    height: 21.25px;
    background: url(/public/assets/img/envelope.png), #5E9859 50% / cover fixed;
  }
  
  .textkanan2 {
    color: #fff;
    font-family: Rounded Mplus 1c Bold;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-left: 8px;
  }
  
  
  .item {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  </style>
  
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      campaigns: [],
      laporan: [],
    };
  },
  mounted() {
    this.fetchCampaigns();
    this.fetchData();
  },
  methods: {
    fetchCampaigns() {
      axios.get('http://127.0.0.1:8000/api/getDataUser')
        .then(response => {
          this.campaigns = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getImageUrl(filename) {
      return `http://127.0.0.1:8000/storage/bukti_donasi/${filename}`;
    },
    fetchData() {
      // Mengambil data dari backend menggunakan axios
      axios
        .get('http://127.0.0.1:8000/api/getDataLaporan')
        .then(response => {
          console.log(response.data);
          this.laporan = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    logoutUser() {
            // Kirim permintaan ke server untuk logout
            axios.post('http://127.0.0.1:8000/api/logout') // Ganti URL '/logout' sesuai dengan URL rute logout di sisi server
                .then(response => {
                    console.log(response);
                    this.clearUserData();
                    window.location.href = '/'; // Ganti '/login' dengan URL halaman login yang sesuai
                })
                .catch(error => {
                    // Handle error jika ada
                    console.error(error);
                });
        },
        clearUserData() {
        // Clear user data from local storage
        localStorage.removeItem('user'); // Assuming 'user' is the key used to store user data
        }
  },
};
</script>
  
  
  
  