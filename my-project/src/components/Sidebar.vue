<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="sidebar-wrapper">
    
        <ul class="nav">
            <li>
            <router-link to="/DashboardMasterUser">
                    <i class="nc-icon nc-single-02"></i>
                    <p>Donasi</p>
            </router-link>                    
            </li>
            <li class="active ">
                <router-link to="/DashboardAdmin">
                    <i class="nc-icon nc-tile-56"></i>
                    <p>Pengajuan</p>
                </router-link>  
            </li>
            <li>
                <router-link to="/DashboardBukti">
                    <i class="nc-icon nc-cloud-upload-94"></i>
                    <p>Pelapor</p>
                </router-link>  
            </li>
            <li>
                <router-link to="/DashboardDataUser">
                    <i class="nc-icon nc-cloud-upload-94"></i>
                    <p>User</p>
                </router-link>  
            </li>

            
        </ul>
        <button class="btn-logout" @click="logoutUser">Logout</button>
    </div>
</template>

<style>
.btn-logout{
    width: 200px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #E66;
}
</style>
<script>
import axios from 'axios';

export default {
    // ... other component options ...
    
    methods: {
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
    }
};
</script>