<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="content">
    <router-view></router-view>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                    </div>
                    <div>
                        <h3>Master Donasi</h3>
                        <div style="margin-left: 500px;">
                            <a class="btn btn-primary btn-sm my-1 mr-sm-1"> <i class="nc-icon nc-simple-add"></i> Tambah
                                Data</a>
                            <a class="btn btn-success btn-sm my-1 mr-sm-1"> <i class="nc-icon nc-minimal-left"></i> Lihat
                                Data</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nama</th>
                                        <th>Target Donasi</th>
                                        <th>Donasi Terkumpul</th>
                                        <th>Tanggal</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Hamba</td>
                                        <td>2.000.000</td>
                                        <td>200.000.000</td>
                                        <td>Oud-Turnhout</td>
                                        <td>
                                            <button type="submit" class="btn btn-success btn-sm my-1 mr-sm-1">
                                                Selesai</button>
                                        </td>
                                        <td>
                                            <button type="submit" class="btn btn-success btn-sm my-1 mr-sm-1">
                                                Update</button>
                                            <button type="submit" class="btn btn-danger btn-sm my-1 mr-sm-1">
                                                Delete</button>
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