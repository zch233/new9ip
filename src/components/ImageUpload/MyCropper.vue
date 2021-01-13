<template>
  <img ref="imageRef" :src="src" alt="avatar" />
</template>

<script lang="ts">
import Cropper from 'cropperjs';
import './cropper.min.css';
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
  name: 'MyCropper',
  props: {
    src: String,
    onInitialized: Function,
  },
  setup(props) {
    const imageRef = ref(null)
    const cropper = ref<Cropper | undefined>(undefined)
    onMounted(() => {
      cropper.value = new Cropper(imageRef.value, {
        initialAspectRatio: 1,
        aspectRatio: 1,
        viewMode: 1,
        guides: true,
        minCropBoxHeight: 64,
        minCropBoxWidth: 64,
        responsive: true,
        autoCropArea: 1,
        checkOrientation: false,
        dragMode: 'crop',
        preview: '.imgPreview',
      });
      props.onInitialized && props.onInitialized(cropper.value);
    })
    watch(() => props.src, () => {
      if (typeof cropper.value !== 'undefined' && typeof props.src !== 'undefined') {
        cropper.value.reset().clear().replace(props.src);
      }
    })
    return {
      imageRef,
    }
  }
});
</script>
<style scoped lang="scss">

</style>
