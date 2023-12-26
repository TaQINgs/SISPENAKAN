<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
          <span class="text">LogOut</span>
        </router-link>
      </div>
    </section>
<br>
<br>
<br>
  <section class="content card" style="padding: 10px 10px 10px 10px ">
    <div class="box">
      <h5 style="text-align: center;">Form Pengajuan Donasi</h5>
      <form @submit.prevent="submitForm" enctype="multipart/form-data">
        <div class="row">
          <div class="col-12">
            <label for="nomor">Nama</label>
            <input v-model="form.nama_lengkap" type="text" class="form-control" id="Nama" placeholder="Nama" required>
            <label for="yth">No Hp</label>
            <input v-model="form.nomor_hp" type="text" class="form-control" id="Nominal" placeholder="No HP" required>
            <label for="yth">Alasan</label>
            <input v-model="form.alasan" type="text" class="form-control" id="Nominal" placeholder="Alasan" required>
            <label for="dari">Tujuan Donasi</label>
            <input v-model="form.tujuan_donasi" type="text" class="form-control bg-light" id="dari"
              placeholder="Tujuan Donasi" required>
            <label for="hari">Nominal</label>
            <input v-model="form.nominal" class="form-control bg-light" id="email" rows="3" placeholder="Nominal"
              required>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label for="file1">Unggah Data 1</label>
            <input v-on:change="handleFile1" type="file" class="form-control-file" id="bukti1">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label for="file2">Unggah Data 2</label>
            <input v-on:change="handleFile2" type="file" class="form-control-file" id="bukti2">
          </div>
        </div>
        <button type="submit" class="btn btn-red"> Ajukan</button>
        <router-link to="/" class="btn btn-red btn-sm">Kembali</router-link>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        nama_lengkap: '',
        alamat: '',
        nomor_hp: '',
        alasan: '',
        tujuan_donasi: '',
        nominal: '',
        bukti1: null,
        bukti2: null
      }
    };
  },
  methods: {
    submitForm() {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      if (user) {
        this.form.alamat = user.alamat;

        // Menggunakan metode POST untuk membuat pengajuan donasi baru
        axios
          .post('http://127.0.0.1:8000/api/post-permohonan-donasi', this.form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            // Tangani respons setelah permintaan berhasil
            console.log(response.data);
            // Reset form setelah berhasil mengirim data
            this.$router.push('/Notifikasi')
          })
          .catch(error => {
            // Tangani kesalahan jika permintaan gagal
            console.error(error);
          });
      }
    },
    updateForm(id) {
      // Menggunakan metode PUT untuk mengupdate pengajuan donasi
      axios
        .put(`/api/pengajuan_donasi/${id}`, this.form)
        .then(response => {
          // Tangani respons setelah permintaan berhasil
          console.log(response.data);
          window.location.reload();
        })
        .catch(error => {
          // Tangani kesalahan jika permintaan gagal
          console.error(error);
        });
    },
    deleteForm(id) {
      // Menggunakan metode DELETE untuk menghapus pengajuan donasi
      axios
        .delete(`/api/pengajuan_donasi/${id}`)
        .then(response => {
          // Tangani respons setelah permintaan berhasil
          console.log(response.data);
          window.location.reload();
        })
        .catch(error => {
          // Tangani kesalahan jika permintaan gagal
          console.error(error);
        });
    },
    resetForm() {
      // Mereset nilai form setelah berhasil mengirim data
      this.form.nama_lengkap = '';
      this.form.nomor_hp = '';
      this.form.alasan = '';
      this.form.tujuan_donasi = '';
      this.form.nominal = '';
      this.form.bukti1 = null;
      this.form.bukti2 = null;
    },
    handleFile1(event) {
      // Mengambil file yang diunggah
      this.form.bukti1 = event.target.files[0];
    },
    handleFile2(event) {
      // Mengambil file yang diunggah
      this.form.bukti2 = event.target.files[0];
    },
  }
};
</script>