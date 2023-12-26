<template>
  <div class="content">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Password</th>
              <th>Alamat</th>
              <th>Instansi</th>
              <th>Jenis Pendidikan</th>
              <th>Pendapatan</th>
              <th>Level</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in donasiData" :key="data.id">
              <td>{{ data.id }}</td>
              <td>{{ data.name }}</td>
              <td>{{ data.email }}</td>
              <td>{{ data.password }}</td>
              <td>{{ data.alamat }}</td>
              <td>{{ data.instansi }}</td>
              <td>{{ data.jenis_pendidikan }}</td>
              <td>{{ data.pendapatan }}</td>
              <td>{{ data.level }}</td>
              <td>
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
            <label for="nama">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" v-model="formData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="text" class="form-control" id="password" v-model="formData.password">
          </div>
          <div class="form-group">
            <label for="password">Alamat</label>
            <input type="text" class="form-control" id="password" v-model="formData.alamat">
          </div>
          <div class="form-group">
            <label for="instansi">Instansi</label>
            <input type="text" class="form-control" id="instansi" v-model="formData.instansi">
          </div>
          <div class="form-group">
            <label for="jenis_pendidikan">Jenis Pendidikan</label>
            <input type="text" class="form-control" id="jenis_pendidikan" v-model="formData.jenis_pendidikan">
          </div>
          <div class="form-group">
            <label for="pendapatan">Pendapatan</label>
            <input type="number" class="form-control" id="pendapatan" v-model="formData.pendapatan">
          </div>
          <div class="form-group">
            <label for="level">Level</label>
            <input type="text" class="form-control" id="level" v-model="formData.level">
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
        name: '',
        email: '',
        password: '',
        alamat: '',
        instansi: '',
        jenis_pendidikan: '',
        pendapatan: '',
        level: ''
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
      axios.get('http://127.0.0.1:8000/api/User')
        .then(response => {
          console.log(response.data);
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
      const data = this.donasiData.find(item => item.id === id);
      if (data) {
        this.formData = {
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          alamat: data.alamat,
          instansi: data.instansi,
          jenis_pendidikan: data.jenis_pendidikan,
          pendapatan: data.pendapatan,
          level: data.level,
        };

        this.isEditModalVisible = true;
      }
    },
    saveEditedItem() {
      const id = this.formData.id;
      axios
        .put(`http://127.0.0.1:8000/api/User/${id}`, this.formData)
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
    }
  }
};
</script>
