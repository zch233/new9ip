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
                  <Icon icon="qq" /><span>{{ contact.qq }}</span>
                </a>
              </p>
              <p>
                <a rel="noopener noreferrer" target="_blank" :href="`tel:${ contact.mobile }`">
                  <Icon icon="phone" /><span>{{ contact.mobile }}</span>
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
        <RouterLink to="/user/collect">我的收藏</RouterLink>
      </template>
    </UIPopover>
    <UIPopover placement="left">
      <span class="slideArt-item"><Icon icon="QRCode" /></span>
      <template #content>
        <div><img src="../../assets/page/qrcode.jpg" alt=""></div>
        <span>扫描二维码关注我们</span>
      </template>
    </UIPopover>
    <span v-show="scrollTop > 800" @click="scrollToTop" class="slideArt-item"><Icon icon="returnTop" /></span>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import Icon from '../Icon/index.vue'
import UIPopover from '../UI/UIPopover.vue';
import * as homeApi from '../../api/home'
import { getScrollTop } from '/@/utils';

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
    const scrollTop = ref(0)
    // const scrollToTop = () => {
    //   const c = scrollTop.value;
    //   if (c > 0) {
    //     window.requestAnimationFrame(scrollToTop);
    //     window.scrollTo(0, c - c / 8);
    //   }
    // }
    const scrollToTop = () => window.scroll(0, 0)
    const getContactConfig = async () => {
      const {data} = await homeApi.getContactConfig()
      contacts.value = data
    }
    const updateScrollTop = () => scrollTop.value = getScrollTop()
    onMounted(() => {
      getContactConfig()
      window.addEventListener('scroll', updateScrollTop)
    })
    onUnmounted(() => window.removeEventListener('scroll', updateScrollTop))
    return {
      contacts,
      scrollTop,
      scrollToTop,
    }
  }
})
</script>

<style lang="scss" scoped>
a {color: inherit;}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slideArt {
  position: fixed;
  right: 0;
  top: 40%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 24px;
  z-index: 1;
  &-item {
    padding: 8px;
    line-height: 1;
    cursor: pointer;
    background-color: #2E3547;
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
      span {
        transition: all .3s;
        &:hover {color: #14A8BD;}
      }
      svg {
        fill: #14A8BD;
        font-size: 20px;
        margin: 0 10px 0 20px;
      }
    }
  }
}
</style>
