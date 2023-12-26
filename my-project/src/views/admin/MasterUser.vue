<template>
  <div class="content">
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
              <th>Berkas</th>
              <th>Donasi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in donasiData" :key="data.id">
              <td>{{ data.id }}</td>
              <td>{{ data.nama_lengkap }}</td>
              <td>{{ data.created_at }}</td>
              <td>{{ data.nomor_hp }}</td>
              <td>{{ data.alasan }}</td>
              <td>{{ data.tujuan_donasi }}</td>
              <td>{{ data.nominal }}</td>
              <td>{{ data.bukti1 }}</td>
              <td>{{ data.donasi }}</td>
              <td>{{ data.status }}</td>
              <td>
                <!-- <button type="button" class="btn btn-primary btn-sm my-1 mr-sm-1" @click="openEditModal(data.id)">
                  Edit
                </button> -->
                <button  type="button" class="btn btn-danger btn-sm my-1 mr-sm-1" @click="openEditModal(data.id)" data-toggle="modal" data-target="#editModal">
                  Edit
                </button>
                <button type="button" class="btn btn-danger btn-sm my-1 mr-sm-1"
                        @click="statusPengajuan(data.id, 'Selesai')">
                  Selesai
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
            <input type="text" class="form-control" id="nama" v-model="formData.nama_lengkap">
          </div>
          <div class="form-group">
            <label for="alasan">Alasan</label>
            <input type="text" class="form-control" id="alasan" v-model="formData.alasan">
          </div>
          <div class="form-group">
            <label for="no_hp">No HP</label>
            <input type="text" class="form-control" id="no_hp" v-model="formData.nomor_hp">
          </div>
          <div class="form-group">
            <label for="tujuan_donasi">Tujuan Donasi</label>
            <input type="text" class="form-control" id="tujuan_donasi" v-model="formData.tujuan_donasi">
          </div>
          <div class="form-group">
            <label for="nominal">Nominal</label>
            <input type="text" class="form-control" id="nominal" v-model="formData.nominal">
          </div>
          <div class="form-group">
            <label for="bukti1">Bukti1</label>
            <input type="text" class="form-control" id="bukti1" v-model="formData.bukti1">
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <input type="text" class="form-control" id="status" v-model="formData.status">
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
      donasiData: [],
      formData: {
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
      isEditModalVisible: false,
      editItemId: null
    };
  },
  mounted() {
    this.lihatDataDonasi();
  },
  methods: {
    lihatDataDonasi() {
      axios.get('http://127.0.0.1:8000/api/getDataUser')
        .then(response => {
          this.donasiData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    mounted() {
    this.lihatDataDonasi();
    },
    openEditModal(id) {
      this.editItemId = id;
      this.editItem(id); // Call the editItem method to populate the form fields with the data of the selected item.
    },
    editItem(id) {
      const donasi = this.donasiData.find(item => item.id === id);
      if (donasi) {
        this.formData = {
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
    saveEditedItem() {
      const id = this.formData.id;
      axios
        .post(`http://127.0.0.1:8000/api/pengajuan_donasi/${id}`, this.formData)
        .then(response => {
          console.log(response.data);
          this.isEditModalVisible = false;
          this.resetForm();
          this.lihatDataDonasi();
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    },
    closeEditModal() {
      
      this.resetForm();
    },
    statusPengajuan(id, status) {
    axios.post(`http://127.0.0.1:8000/api/status-laporan/${id}/${status}`)
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
  }
};
</script>
