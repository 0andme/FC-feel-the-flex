<template>
  <!-- 모달 -->
  <FullscreenModal
    v-model="isShow"
    :modal-name="modalName">
    <template #activator>
      <div
        class="user_profile main"
        @click="isShow=true">
        <span class="user_profile__name">{{ currentUser.displayName }}</span>
        <!-- 사용자 이미지 혹은 이름 맨 앞 글자 -->
        <div class="user_profile__img">
          <!-- <img src="" alt=""> -->
          <span>{{ currentUser.displayName[0] }}</span>
        </div>
      </div>
    </template>
    <template #default>
      <header>
        <span>내 정보</span>
      </header>
      <div class="devider"></div>
      <RouterLink
        to="user"
        @click="isShow=false">
        <div class=" user_profile menu">
          <!-- 사용자 이미지 혹은 이름 맨 앞 글자 -->
          <div class="user_profile__img">
            <!-- <img src="" alt=""> -->
            <span>{{ currentUser.displayName[0] }}</span>
          </div>
          <span class="user_profile__name">{{ currentUser.displayName }}</span>
        </div>
      </RouterLink>
      <div class="devider"></div>

      <div class="menu_list">
        <RouterLink
          to="user"
          class="menu_item"
          @click="isShow=false">
          마이 페이지
        </RouterLink>     

        <!-- <RouterLink>장바구니</RouterLink> -->
        <RouterLink
          to="settings"
          class="menu_item"
          @click="isShow=false">
          설정
        </RouterLink>
      </div>

      <div class="devider"></div>
      <div
        class="menu_item"
        @click="userLogOut">
        로그아웃
      </div>
    </template>    
  </FullscreenModal>
</template>

<script>
import FullscreenModal from './FullscreenModal'
import {logOut} from '~/utils/authApi'

export default {
  components: { FullscreenModal },
  // emits:[changeIsHover],
  data(){
    return{
      isShow:false,
      modalName:'menu'

    }
  },
  computed:{
    currentUser(){
      return this.$store.state.user.currentUser
    }
  },
  watch:{
    
  },
  methods:{
    userLogOut(){
       logOut().then(()=>{
        sessionStorage.removeItem('accessToken')
        this.isShow=false
        this.$store.commit('user/assignState',{ currentUser:null})
        this.$router.push('/')

       })      
    }
  }

}
</script>

<style lang="scss" scoped>

// 모달 창의 헤더
header{
  height: 65px;
  line-height: 65px;
  text-align: center;
}
//라우터 링크 스타일 전역
a {
  color: #3d3d3d;
  text-decoration: none;
}
//devider
.devider{
  width: 100%;
  border-bottom: 1px solid #3d3d3d;  // 수정 색상 태그
  margin : 10px 0;
}
// 유저 프로필 요소
.user_profile{
  $profileSize:40px;

  width: 145px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  text-decoration: none;
  
  @mixin profileName{
    font-weight: 700;
  }
  @mixin profileImg{
    width: $profileSize;
    height: $profileSize;
    border-radius: 50%;
    background-color: $color-secondary;
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: #fff; // 수정 - 색상 태그 
    span{
      margin-top:3px ;
    }
  }
  //메인 홈페이지의 프로필 요소
  &.main{
    .user_profile__name{
      @include profileName;
      margin-right: 8px;
    }
    .user_profile__img{
      @include profileImg()
    }
    
    }
  // 메뉴 모달 창의 프로필 요소
  &.menu{
    display: flex;
    justify-content: flex-start;
    padding: 8px 10px;
    .user_profile__name{
      margin-left: 8px;
      font-size: 1.3rem;
      font-weight: 700;
    }
    .user_profile__img{
      @include profileImg()
    }

  }
  
}
// 메뉴 목록
.menu_list{
  display: flex;
  flex-direction: column;
}
// 각 메뉴 아이템
.menu_item{
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 10px;
  &:last-child{
    margin-bottom: 0;
  }
  // 메뉴 아이템 호버
  &:hover{
    color: $color-danger;  // 수정 - 색상
  }
}
</style>
