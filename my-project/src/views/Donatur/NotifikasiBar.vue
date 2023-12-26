<!-- eslint-disable vue/multi-word-component-names -->
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
        <router-link to="/FormDonasi" class="button-link">
          <span class="text">Pengajuan</span>
        </router-link>
        <router-link to="/Login" class="button-link">
          <span class="text">Login/Register</span>
        </router-link>
      </div>
    </section>

    <section style="padding-left: 500px;">
      <div>
        <div class="campaigns-section">
          <div class="container">
            <div class="row" style="padding-top: 50px; text-align: center;">
              <div class="col-md-6">
                <div class="card move-on-hover">
                  <div class="card-body">
                    <h3><b>Pembayaran</b></h3>
                    <p class="card-title">
                      Anda berdonasi kepada <b>{{ nama }}-</b> dengan nominal :<br />
                      RP {{ nominal }}<br />
                      Silahkan scan codeQr untuk melakukan pembayaran
                    </p>
                    <img src="https://i.stack.imgur.com/Ln0Ar.jpg" alt="">
                    <p>a/n SISPENAKAN</p>
                    <router-link
                      to="/NotifikasiDon"
                      class="button-link"
                      :nama="nama"
                      :nominal="nominal"
                    >
                      <span class="text" style="color:black">Lanjut</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotifikasiBar',
  data() {
    return {
      // Declare variables to store received name and nominal
      nama: '',
      nominal: '',
    };
  },
  mounted() {
    // Fetch the query parameters "nama" and "nominal" from the route
    this.nama = this.$route.query.nama || '';
    this.nominal = this.$route.query.nominal || '';
  },
};
</script>
