<template>
<router-view></router-view>
<section class="navbar">
      <div class="logo"></div>
      <div class="button">
        <router-link to="/" class="button-link">
          <span class="text">Beranda</span>
        </router-link>
      </div>
    </section>
<br>
<br>
<br>
  <section class="content card" style="padding: 10px 10px 10px 10px ">
    <div class="box">
      <p>Donating for campaign ID: {{ $route.params.id }}</p>
      <form @submit="simpanData">
        <div class="row">
          <div class="col-12">
            <label for="nomor">Nama</label>
            <input name="nama" type="text" class="form-control" v-model="formData.nama" placeholder="Nama" required>
            <label for="hari">Email</label>
            <input name="Email" class="form-control bg-light" v-model="formData.email" rows="3" placeholder="Email" required>
            <label for="no_hp">No HP</label>
            <input name="no_hp" class="form-control bg-light" v-model="formData.nomor_hp" rows="3" placeholder="no_hp" required>
            <label for="judul">Judul</label>
            <input name="judul" type="text" class="form-control bg-light" placeholder="Judul" required>
            <label for="yth">Nominal</label>
            <input name="Nominal" type="text" class="form-control" v-model="formData.nominal" placeholder="Nominal" required>
            <label for="dari">Dari</label>
            <input name="dari" type="text" class="form-control bg-light" placeholder="Dari" required>
           </div>
        </div>
        <button type="submit" class="btn btn-red btn-sm">Donasi</button>
        <router-link to="/" class="btn btn-red btn-sm">Kembali</router-link>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
name: "FormDonasi",
  data() {
    return {
      formData: {
        nominal: '',
      }
    };
  },
  methods: {
    simpanData(event) {
      event.preventDefault();

      axios.put(`http://127.0.0.1:8000/api/putDataDonasi/${this.$route.params.id}`, this.formData)
        .then(response => {
          console.log(response.data);
          this.$router.push({
            path: '/NotifikasiBar',
            query: {
              nama: this.formData.nama,
              nominal: this.formData.nominal,
            },
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  
};
</script>
