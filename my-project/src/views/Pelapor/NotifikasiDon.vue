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
                      <h3><b>Terimakasih</b></h3>
                      <p class="card-title">
                        anda telah berdonasi kepada {{nama}} dengan nominal <br>
                        <b style="font-size: 40px;">RP {{nominal}}</b><br>
                        Silahkan lihat bukti donasi anda
                      </p>
                      <br>
                      <router-link to="/" class="btn  my-4 mb-2 btn-red">
                        Tutup
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
  <style>
  .btn-red {
    background-color: red;
  }
  </style>

  <script>
export default {
  name: 'NotifikasiDon',
  props: {
    nama: {
      type: String,
      required: true,
    },
    nominal: {
      type: String,
      required: true,
    },
  },
};
</script>