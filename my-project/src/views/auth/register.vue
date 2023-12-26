<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="full-page-background">
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-12 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2" style="background: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);">
              <div class="border-radius-lg py-3 pe-1">
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Form Registrasi</h4>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="register">
                <div class="col-21">
                  <div class="mb-3">
                    <label for="email">Alamat Email</label>
                    <input type="email" id="email" class="form-control" v-model="email" placeholder="Email" required>
                  </div>

                  <div class="mb-3">
                    <label for="name">Nama</label>
                    <input type="text" id="name" class="form-control" v-model="name" placeholder="Nama" required>
                  </div>

                  <div class="mb-3">
                    <label for="alamat">Alamat</label>
                    <input type="text" id="alamat" class="form-control" v-model="alamat" placeholder="Alamat" required>
                  </div>

                  <div class="mb-3">
                    <label for="instansi">Instansi</label>
                    <input type="text" id="instansi" class="form-control" v-model="instansi" placeholder="Instansi" required>
                  </div>

                  <div class="mb-3">
                    <label for="jenis_pendidikan">Jenis Pendidikan</label>
                    <input type="text" id="jenis_pendidikan" class="form-control" v-model="jenis_pendidikan" placeholder="Jenis Pendidikan" required>
                  </div>

                  <div class="mb-3">
                    <label for="pendapatan">Pendapatan</label>
                    <input type="text" id="pendapatan" class="form-control" v-model="pendapatan" placeholder="Pendapatan" required>
                  </div>

                  <div class="mb-3">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="password" placeholder="Password" required>
                  </div>

                  <div class="mb-3">
                    <label for="no_hp">No HP</label>
                    <input type="text" id="no_hp" class="form-control" v-model="no_hp" placeholder="No HP" required>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Registrasi</button>
                    <p>Sudah punya akun?</p>
                    <router-link to="/login" class="nav-link btn bg-success text-white">
                      Login
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      alamat: '',
      instansi: '',
      jenis_pendidikan: '',
      pendapatan: '',
      no_hp: '',
    };
  },
  methods: {
    register() {

      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        alamat: this.alamat,
        instansi: this.instansi,
        jenis_pendidikan: this.jenis_pendidikan,
        pendapatan: this.pendapatan,
        no_hp: this.no_hp,
      };

      axios.post('http://127.0.0.1:8000/api/register', userData)
        .then(response => {
          const user = response.data.user;
          localStorage.setItem('user', JSON.stringify(user));
          // Tambahkan logika atau arahkan ke halaman lain setelah registrasi berhasil
          this.$router.push('/login');
        })
    },
  },
};
</script>

<style>
.full-page-background {
  background-image: url('https://cdn.pixabay.com/photo/2020/07/23/01/29/books-5430104_1280.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container {
  color: #fff;
  text-align: center;
  padding: 20px;
}
</style>
