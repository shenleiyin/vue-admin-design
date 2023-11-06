<template>
  <div>
    <el-upload action="#" list-type="picture-card" :multiple="true" :auto-upload="false">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <!-- <el-dialog :visible.sync="dialogVisible">
      <el-image :src="dialogImageUrl" :fit="contain"></el-image>
    </el-dialog>-->
    <el-image :src="dialogImageUrl" :fit="contain"></el-image>
  </div>
</template>

<script>
import img from "../../assets/testImg/img.jpg";
export default {
  data() {
    return {
      url: "",
      fileList: [
        // {
        //   name: "",
        //   url: "",
        // },
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  mounted() {},
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>