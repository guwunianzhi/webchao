<template>
  <div class="app-container">
    <div class="block">
      <el-row  :gutter="20">
        <el-col :span="6">
          <el-input v-model="listQuery.name" placeholder="请输入字典名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="success" icon="el-icon-search" @click.native="search">{{ $t('button.search') }}</el-button>
          <el-button type="primary" icon="el-icon-refresh" @click.native="reset">{{ $t('button.reset') }}</el-button>
        </el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="24">
          <el-button type="success" icon="el-icon-plus" @click.native="add">{{ $t('button.add') }}</el-button>
          <!-- <el-button type="primary" icon="el-icon-edit" @click.native="edit">{{ $t('button.edit') }}</el-button> -->
          <el-button type="danger" icon="el-icon-delete" @click.native="remove">{{ $t('button.delete') }}</el-button>
        </el-col>
      </el-row>
    </div>


    <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row
    @current-change="handleCurrentChange">
      <el-table-column label="ID">
        <template slot-scope="scope">
          {{scope.row.clinetId}}
        </template>
      </el-table-column>
      <el-table-column label="广告名称">
        <template slot-scope="scope">
          {{scope.row.adName}}
        </template>
      </el-table-column>
      <el-table-column label="广告来源">
        <template slot-scope="scope">
          {{scope.row.source}}
        </template>
      </el-table-column>
      <el-table-column label="关联用户">
        <template slot-scope="scope">
          {{scope.row.clientName}}
        </template>
      </el-table-column>
      <el-table-column label="客户电话">
        <template slot-scope="scope">
          {{scope.row.clientPhone}}
        </template>
      </el-table-column>
      <el-table-column label="开始时间">
        <template slot-scope="scope">
          {{scope.row.startTime}}
        </template>
      </el-table-column>
      <el-table-column label="结束时间">
        <template slot-scope="scope">
          {{scope.row.endTime}}
        </template>
      </el-table-column>
    </el-table>


    <el-dialog
      :title="formTitle"
      :visible.sync="formVisible"
      width="60%">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">

        <el-form-item label="广告名称" prop="name">
          <el-input v-model="form.adName"  minlength=1></el-input>
        </el-form-item>

        <el-form-item label="关联用户" >
          <!-- 添加filterable可以实现搜索功能 -->
          <el-select v-model="form.clientName" filterable size="small" style="width: 100%;" placeholder="请选择">
            <el-option
                v-for="(item, i) in userInfoData"
                :key="i.ID"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户电话" prop="clientPhone">
          <el-input v-model="form.clientPhone"  minlength=1></el-input>
        </el-form-item>
        <el-form-item label="广告投放时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="投放结束时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="来源&备注" prop="clientPhone">
          <el-input v-model="form.source"  minlength=1></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="save">{{ $t('button.submit') }}</el-button>
          <el-button @click.native="formVisible = false">{{ $t('button.cancel') }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script src="./ad.js"></script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/common.scss";
</style>
