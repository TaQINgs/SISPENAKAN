import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './LandingPage.vue'
import LandingPage2 from './LandingPage2.vue'
import DashboardAdmin from "./DashboardAdmin.vue";
import DashboardBukti from "./DashboardBukti.vue";
import DashboardMasterUser from "./DashboardMasterUser.vue";
import DashboardDataUser from "./DashboardDataUser.vue";
import Login from "./login.vue";
import User from "./views/admin/MasterUser.vue";
import Transaksi from "./views/admin/Transaksi.vue";
import UploadBukti from "./views/admin/UploadBukti.vue";
import FormDonasi from "./views/Donatur/FormDonasi.vue";
import Pengajuan from "./views/Pelapor/Pengajuan.vue";
import register from "./views/auth/register.vue";
import Footer from "./components/Footer.vue";
import Notifikasi from "./views/Donatur/Notifikasi.vue";
import NotifikasiDon from "./views/Pelapor/NotifikasiDon.vue";
import NotifikasiBar from "./views/Donatur/NotifikasiBar.vue";
import LihatLaporan from "./views/LihatLaporan.vue";
const requireAuth = (to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    // Jika pengguna telah login, lanjutkan ke halaman yang diminta
    next();
  } else {
    // Jika pengguna belum login, arahkan ke halaman login
    next('/login');
  }
};

const routes = [
  { path:'/', component: LandingPage},
  { path:'/LandingPage2', component: LandingPage2},
  { path:'/Login', component: Login},
  { path:'/DashboardAdmin', component: DashboardAdmin},
  { path:'/DashboardBukti', component: DashboardBukti},
  { path:'/DashboardMasterUser', component: DashboardMasterUser},
  { path:'/DashboardDataUser', component: DashboardDataUser},
  { path:'/MasterUser', component: User},
  { path:'/Transaksi', component: Transaksi},
  { path:'/UploadBukti', component: UploadBukti},
  { path: '/Pengajuan', component: Pengajuan, beforeEnter: requireAuth }, // Tambahkan "beforeEnter" untuk memeriksa status login
  {
    path: '/FormDonasi/:id',
    name: 'FormDonasi',
    component: FormDonasi,
  },
  { path:'/register', component: register},
  { path:'/Footer', component: Footer},
  { path:'/Notifikasi', component: Notifikasi},
  { path:'/NotifikasiDon', component: NotifikasiDon},
  { path:'/NotifikasiBar', component: NotifikasiBar},
  { path:'/lihatlaporan/:id', component: LihatLaporan}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')