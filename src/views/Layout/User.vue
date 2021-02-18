<template>
  <AppHeader />
  <AppTitleBar title="会员中心">
    <RouterLink class="returnHome" to="/patent">回专利市场</RouterLink>
  </AppTitleBar>
  <div class="routerViewWrapper">
    <div class="pageWidthWithCenter userCenterWrapper">
      <nav class="userMenu">
        <ul class="userMenu-list">
          <li class="userMenu-list-item" v-for="item in userMenu.children.filter(v => v.name !== 'VipRecord')" :key="item.path"><RouterLink active-class="active" :to="`${userMenu.path}/${item.path}`">{{item.meta.title}}</RouterLink></li>
        </ul>
      </nav>
      <section class="userContent"><RouterView /></section>
    </div>
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppFooter from '../../components/AppFooter/index.vue';
import AppHeader from '../../components/AppHeader/index.vue';
import AppTitleBar from '../../components/AppTitleBar/index.vue';
import { user } from '../../router/modules/user';

export default defineComponent({
  name: 'LayoutUser',
  components:{AppFooter, AppHeader, AppTitleBar},
  setup() {
    return {
      userMenu: user
    }
  }
})
</script>

<style lang="scss" scoped>
.routerViewWrapper {min-height: calc(100vh - 40px - 80px - 300px - 40px)}
.returnHome {
  color: #999999;
  font-size: 16px;
}
.userCenterWrapper {
  display: flex;
  .userMenu {
    background-color: #fff;
    width: 12.5%;
    min-width: 6.2em;
    &-list { &-item { a {
        width: 100%;display: inline-block;font-size: 12px;padding: 11px 1.6em;transition: all .3s;color: #333333;
        &.active, &:hover {color: #14A8BD;background-color: #F3FAFF;}}
      }
    }
  }
  .userContent {margin-left: 10px;background-color: #fff;flex: 1;}
}
</style>
