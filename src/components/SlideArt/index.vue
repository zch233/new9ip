<template>
  <section class="slideArt">
    <UIPopover placement="left">
      <span class="slideArt-item"><Icon icon="phone" /></span>
      <template #content>
        <div class="contacts">
          <p>免费咨询</p>
          <div class="contacts-item" v-for="contact in contacts" :key="contact.id">
            <label>{{ contact.nickname }}</label>
            <div>
              <p>
                <a rel="noopener noreferrer" target="_blank" :href="`tencent://message/?uin=${contact.qq}&Site=qq&Menu=yes`">
                  <Icon icon="qq" />{{ contact.qq }}
                </a>
              </p>
              <p>
                <a rel="noopener noreferrer" target="_blank" :href="`tel:${ contact.mobile }`">
                  <Icon icon="phone" />{{ contact.mobile }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </template>
    </UIPopover>
    <UIPopover placement="left">
      <span class="slideArt-item"><Icon icon="star2" /></span>
      <template #content>
        <RouterLink to="/user/collect">我收藏的专利</RouterLink>
      </template>
    </UIPopover>
    <UIPopover placement="left">
      <span class="slideArt-item"><Icon icon="QRCode" /></span>
      <template #content>
        <div><img src="../../assets/page/qrcode.jpg" alt=""></div>
        <span>扫描二维码关注我们</span>
      </template>
    </UIPopover>
    <span @click="scrollTop" class="slideArt-item"><Icon icon="returnTop" /></span>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Icon from '/@components/Icon/index.vue'
import UIPopover from '/@components/UI/UIPopover.vue';
import * as homeApi from '/@api/home'

type Contact = {
  id: number;
  mobile: string;
  nickname: string;
  qq: string;
  wx: string;
}

export default defineComponent({
  name: 'slideArt',
  components: {Icon, UIPopover},
  setup() {
    const contacts = ref<Contact[]>([])
    const scrollTop = () => window.scroll(0,0)
    const getContactConfig = async () => {
      const {data} = await homeApi.getContactConfig()
      contacts.value = data
    }
    onMounted(() => {
      getContactConfig()
    })
    return {
      contacts,
      scrollTop,
    }
  }
})
</script>

<style lang="scss" scoped>
a {color: inherit;}
.slideArt {
  background-color: #2E3547;
  position: fixed;
  right: 0;
  top: 40%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 24px;
  &-item {
    padding: 8px;
    line-height: 1;
    cursor: pointer;
  }
}
.contacts {
  > p {text-align: center;}
  &-item {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 4px 0;
    label {width: 3.4em;}
    p {
      margin: 0;
      line-height: 2.4;
      color: #14A8BD;
      svg {
        font-size: 20px;
        margin: 0 10px 0 20px;
      }
    }
  }
}
</style>
