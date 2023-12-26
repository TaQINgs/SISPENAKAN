<template>
  <div class="content">
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
                    <th>Tanggal</th>
                    <th>Nomor</th>
                    <th>Alasan</th>
                    <th>Tujuan Donasi</th>
                    <th>Nominal</th>
                    <th>Donasi</th>
                    <th>Berkas 1</th>
                    <th>Berkas 2</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in data" :key="data.id">
                    <td>{{ data.id }}</td>
                    <td>{{ data.nama_lengkap }}</td>
                    <td>{{ data.created_at }}</td>
                    <td>{{ data.nomor_hp }}</td>
                    <td>{{ data.alasan }}</td>
                    <td>{{ data.tujuan_donasi }}</td>
                    <td>{{ data.nominal }}</td>
                    <td>{{ data.donasi }}</td>
                    <td>{{ data.bukti1 }}</td>
                    <td>{{ data.bukti2 }}</td>
                    <td>
                      <label class="btn btn-primary btn-sm my-1 mr-sm-1">
                        Upload Bukti
                        <input type="file" style="display: none"  ref="fileInput" @change="uploadFile(data.id)" />
                      </label>
                      <button type="button" class="btn btn-primary btn-sm my-1 mr-sm-1" data-toggle="modal" @click="openEditModal(data.id)" data-target="#editModal">
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
  <!-- Edit Modal -->
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalLabel">Edit Data Donasi</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeEditModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Form to edit data -->
          <div class="form-group">
            <label for="nama">Nama Lengkap</label>
            <input type="text" class="form-control" id="nama" v-model="formDataEdit.nama_lengkap">
          </div>
          <div class="form-group">
            <label for="alasan">Alasan</label>
            <input type="text" class="form-control" id="alasan" v-model="formDataEdit.alasan">
          </div>
          <div class="form-group">
            <label for="no_hp">No HP</label>
            <input type="text" class="form-control" id="no_hp" v-model="formDataEdit.nomor_hp">
          </div>
          <div class="form-group">
            <label for="tujuan_donasi">Tujuan Donasi</label>
            <input type="text" class="form-control" id="tujuan_donasi" v-model="formDataEdit.tujuan_donasi">
          </div>
          <div class="form-group">
            <label for="nominal">Nominal</label>
            <input type="text" class="form-control" id="nominal" v-model="formDataEdit.nominal">
          </div>
          <div class="form-group">
            <label for="bukti1">Bukti1</label>
            <input type="text" class="form-control" id="bukti1" v-model="formDataEdit.bukti1">
          </div>
          <!-- Add other form fields here based on your data structure -->

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeEditModal">Close</button>
          <button type="button" class="btn btn-primary" @click="saveEditedItem">Save changes</button>
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
      data: [],
      formDataEdit: {
        nama_lengkap: '',
        nominal: '',
        email: '',
        nomor_hp: '',
        tujuan_donasi: '',
        bukti1: null,
        bukti2: null,
        alasan: '',
        status: ''
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Mengambil data dari backend menggunakan axios
      axios
        .get('http://127.0.0.1:8000/api/getDataLaporan')
        .then(response => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    uploadFile(id) {
      const fileInput = event.target.files[0];
      const formData = new FormData();
      formData.append('bukti2', fileInput);

      axios
        .post(`http://127.0.0.1:8000/api/upload-bukti/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          // Handle the response if needed
          console.log(response);
          console.log('File uploaded successfully');
          // Refresh data after successful upload
          this.fetchData();
        })
        .catch(error => {
          console.error(error);
        });
    },
    openEditModal(id) {
      this.editItemId = id;
      this.editItem(id); // Call the editItem method to populate the form fields with the data of the selected item.
    },
    editItem(id) {
      const donasi = this.data.find(item => item.id === id);
      if (donasi) {
        this.formDataEdit = {
          nama_lengkap: donasi.nama_lengkap,
          nominal: donasi.nominal,
          email: donasi.email,
          nomor_hp: donasi.nomor_hp,
          tujuan_donasi: donasi.tujuan_donasi,
          bukti1: donasi.bukti1,
          bukti2: donasi.bukti2,
          alasan: donasi.alasan,
          status: donasi.status
        };

        this.isEditModalVisible = true;
      }
    },
    
  
  }
};
</script>
