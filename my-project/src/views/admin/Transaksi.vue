<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <router-view></router-view>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
          </div>
          <!-- <div>
            <div style="margin-left: 500px;">
              <a class="btn btn-primary btn-sm my-1 mr-sm-1"> <i class="nc-icon nc-simple-add"></i> Tambah Data</a>
              <a class="btn btn-success btn-sm my-1 mr-sm-1"> <i class="nc-icon nc-minimal-left"></i> Lihat Data</a>
            </div>
          </div> -->
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Tanggal</th>
                    <th>Nomor</th>
                    <th>Alasan</th>
                    <th>Tujuan Donasi</th>
                    <th>Nominal</th>
                    <th>Berkas 1</th>
                    <th>Berkas 2</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="donasi in pengajuanDonasi" :key="donasi.id">
                    <td>{{ donasi.id }}</td>
                    <td>{{ donasi.nama_lengkap }}</td>
                    <td>{{ donasi.alamat }}</td>
                    <td>{{ donasi.created_at }}</td>
                    <td>{{ donasi.nomor_hp }}</td>
                    <td>{{ donasi.alasan}}</td>
                    <td>{{ donasi.tujuan_donasi}}</td>
                    <td>{{ donasi.nominal}}</td>
                    <td>{{ donasi.bukti1}}</td>
                    <td>{{ donasi.bukti2}}</td>
                    <td>
                      <button type="button" class="btn btn-success btn-sm my-1 mr-sm-1" @click="statusPengajuan(donasi.id, 'Terima')">
                        Terima
                      </button>
                      <button type="button" class="btn btn-danger btn-sm my-1 mr-sm-1" @click="statusPengajuan(donasi.id, 'Tolak')">
                        Tolak
                      </button>
                      <button type="button" class="btn btn-primary btn-sm my-1 mr-sm-1" @click="statusPengajuan(edit.id, 'Tolak')">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>

              </table>
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
      pengajuanDonasi: [],
    };
  },
  mounted() {
    this.fetchPengajuanDonasi();
  },
  methods: {
    fetchPengajuanDonasi() {
      axios.get('http://127.0.0.1:8000/api/get-permohonan-donasi')
        .then(response => {
          this.pengajuanDonasi = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    statusPengajuan(id, status) {
    axios.post(`http://127.0.0.1:8000/api/status-pengajuan/${id}/${status}`)
      .then(response => {
        // Tambahkan logika atau tangani respons sukses
        console.log(response.data.message);
        window.location.reload();
      })
      .catch(error => {
        // Tambahkan logika atau tangani kesalahan
        console.error(error);
      });
  },
  },
};

// Load external scripts
const jqueryScript = document.createElement('script');
jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.head.appendChild(jqueryScript);

const bootstrapScript = document.createElement('script');
bootstrapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.5.0/js/bootstrap.bundle.min.js';
document.head.appendChild(bootstrapScript);
</script>

