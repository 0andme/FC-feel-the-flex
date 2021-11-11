<template>
  <header>
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/about">
      About
    </RouterLink>
    <!-- 필수(인증 Api) -->
    <template v-if="!currentUser">
      <RouterLink to="/login">
        로그인
      </RouterLink>
      <RouterLink to="/signup">
        회원가입
      </RouterLink>
    </template>
    <SideMenu v-if="currentUser" />
    <!-- 필수(인증 Api) -->
  </header>
</template>
<script>
import SideMenu from './SideMenu.vue'

export default {
  components: { SideMenu },
  computed:{
    currentUser(){
      return this.$store.state.user.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
}
</style>
