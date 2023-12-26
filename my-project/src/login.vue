<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="full-page-background">
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div style="background: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);"
                class="border-radius-lg py-3 pe-1">
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Selamat Datang</h4>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="login" role="form" class="text-start">
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" v-model="email" required>
                </div>
                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" v-model="password" required>
                </div>
                <div class="text-center">
                  <button type="submit"
                    style="background: radial-gradient(circle at 10% 20%, rgb(10, 174, 227) 0%, rgb(124, 182, 255) 100.2%);"
                    class="btn bg-gradient-primary w-100 my-4 mb-2">Masuk</button>
                </div>
                <div class="text-center">
                  <router-link to="/register" class="btn btn-link text-black">Belum punya akun? Daftar di
                    sini</router-link>
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
    };
  },
  methods: {
    login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      axios.post('http://127.0.0.1:8000/api/login', credentials)
        .then(response => {
          console.log(response);
          const user = response.data.user;
          localStorage.setItem('user', JSON.stringify(user));
          console.log(localStorage);

          // Mengarahkan pengguna ke halaman "dashboard" setelah login berhasil
          if (user.level === 'admin') {
            this.$router.push('/DashboardAdmin');
          } else {
            this.$router.push('/LandingPage2');
          }
        })
        .catch(error => {
          console.log(error.response.data.message);
          // Tambahkan logika atau tangani kesalahan jika login gagal
        });
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
  position: sticky;
}

.container {
  color: #fff;
  text-align: center;
  padding: 20px;
}
</style>
