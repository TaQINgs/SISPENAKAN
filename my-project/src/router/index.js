// import Vue from 'vue'
// import LandingPage from '../LandingPage.vue'
import { createRouter } from 'vue-router'
import User from "../views/admin/MasterUser.vue";
import Transaksi from "../views/admin/Transaksi.vue";
import UploadBukti from "../views/admin/UploadBukti.vue";
import FormDonasi from "../views/Donatur/FormDonasi.vue";
import DataEdit from "../views/Admin/DataEdit.vue";
import App from './LandingPage.vue'


// Vue.use(VueRouter);
// Vue.config.productionTip = false;
const routes = [
  {
    path: "/user",
    name: "user",
    component: User,
  },
  {
    path: "/transaksi",
    name: "transaksi",
    component: Transaksi,
  },
  {
    path: "/donation",
    component: FormDonasi,
  },
  {
    path: "/UploadBukti",
    name: "UploadBukti",
    component: UploadBukti,
  },
  {
    path: "/data/:id/edit",
    name: "DataEdit",
    component: DataEdit,
  },
  {
    path: "/",
    component: App,
  }
];

const router = new createRouter({
  routes: routes
})

export default router
