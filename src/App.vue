<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  {{year.a}}
  {{year.bb}}
  {{message}}
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
type Year = {
  a: number;
  bb?: number;
}

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup(props) {
    const count = ref(10)
    const year = reactive<Year>({a: 2020})
    onMounted(() => {
      console.log("mounted vue3 typescript", 11111111);
      setTimeout(() => {
        count.value = 3
        year.bb = 1000
      }, 1000)
    })
    return {
      count,
      year,
    }
  },
  
})

</script>
