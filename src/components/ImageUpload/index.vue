<template>
  <UIModal title="上传头像" :onOk="updateAvatar" :maskClosable="false" :confirmLoading="confirmLoading">
<!--    <UIButton type="primary" customer-class="mainButton">选择上传图片</UIButton>-->
    <input type="file" accept="image/*" @change="onSelectFile" />
    <div class="cropper">
      <div class="cropper-imgCropper">
        <MyCropper :src="userAvatar" :onInitialized="onInitialized" />
      </div>
      <div class="cropper-imgPreviewer" v-if="userAvatar">
        <div class="imgPreviewer">
          <div class="imgPreview square" />
          <div class="imgPreview square round" />
        </div>
      </div>
    </div>
  </UIModal>
</template>

<script lang="ts">
import UIModal from '../UI/UIModal.vue';
import UIButton from '../UI/UIButton.vue';
import MyCropper from './MyCropper.vue'
import { defineComponent, ref } from 'vue';
import { useStore } from '/@/store';
import { translateBase64ImgToFile } from '/@/utils';
import { message } from 'ant-design-vue';
import * as settingApi from '../../api/setting'

export default defineComponent({
  name: 'ImageCrop',
  components: { UIModal, UIButton, MyCropper },
  setup(_, context) {
    const store = useStore()
    const confirmLoading = ref(false)
    const cropperRef = ref(undefined)
    const userAvatar = ref(store.state.user.avatar)
    const onSelectFile = (e) => {
      const fileList = e.target.files;
      if (fileList && fileList.length > 0) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          userAvatar.value = reader.result
        });
        reader.readAsDataURL(fileList[0]);
      }
    }
    const onInitialized = (instance) => {
      cropperRef.value = instance;
    }
    const updateAvatar = async () => {
      confirmLoading.value = true
      const hide = message.loading('正在上传头像...');
      const formData = new FormData();
      formData.append('file', translateBase64ImgToFile(cropperRef.value.getCroppedCanvas().toDataURL()));
      const {data} = await settingApi.updateHeader(formData).finally(() => {
        confirmLoading.value = false;
        hide();
      });
      message.success('上传成功');
      context.emit('update:visible', false)
      context.emit('success', false)
      store.commit('COMMIT_USER', data)
    }
    return {
      userAvatar,
      updateAvatar,
      onSelectFile,
      onInitialized,
      confirmLoading,
    }
  }
});
</script>
<style scoped lang="scss">
.cropper {
  display: flex;
  margin-top: 24px;
  &-imgCropper {
    img {width: 100%;}
  }
  &-imgPreviewer {
    margin-left: 40px;
    .title {
    }
    .imgPreview {
      overflow: hidden;
      border: 1px solid #ddd;
      flex: none;
      text-align: center;
      margin: 0 auto;
      &.square {height: 100px;width: 100px;}
      &.round {border-radius: 50%;margin-top: 20px;}
    }
  }
}
</style>
