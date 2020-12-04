import { defineComponent, reactive, ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import logo from './assets/logo.png'
type Year = {
  a: number;
  bb?: number;
  c: number;
}

export default defineComponent({
  name: '1',
  components: {
  },
  setup() {
    const count = ref(10)
    const year = reactive<Year>({a: 2020, c: 1})
    onMounted(() => {
      console.log("mounted vue3 typescript", 11111111);
      setTimeout(() => {
        count.value = 3
        year.bb = 1000
      }, 1000)
    })
    const xxx = () => {
      console.log('you click')
    }
    return () => (
      <>
        <div>123</div>
        <img onClick={xxx} alt="Vue logo" src={'../assets/logo.png'} />
          {year.a}
        {year.c}
        <div>
          <span>21213123123</span>
        </div>
      </>
    )
  }
})
