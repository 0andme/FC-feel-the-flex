<template>
  <SignInOutTemplate>
    <template #pageName>
      <h1>로그인</h1>
    </template>
    <template #default>
      <input
        v-model="userEmail"
        type="text"
        placeholder="이메일 주소 입력" />
      <input
        v-model="userPw"
        type="passwords"
        placeholder="비밀번호 입력" />
    </template>
    
    <template #submitBtn>
      <button @click="userlogIn">
        로그인
      </button>
    </template>
    <template #isSignInUp>
      <span>아직 계정이 없으신가요?</span>   
      <span class="roter_link">
        <RouterLink to="/signup">
          가입하기
        </RouterLink>
      </span>
    </template>
  </SignInOutTemplate>
</template>

<script>
import {logIn} from '~/utils/authApi'
import SignInOutTemplate from '../components/SignInOutTemplate'

export default {
  components:{
    SignInOutTemplate
  },
  data(){
    return{
      userEmail: '',
      userPw: ''
    }
  },
  methods: {
    userlogIn() {
      const data={email:this.userEmail,password:this.userPw} 
      logIn(data)
        .then((userInfo)=>{ 
        sessionStorage.setItem('accessToken', userInfo.accessToken)
        this.$router.push('/')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
h1{
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  margin: 0 0 32px;

}
input{
  width: 100%;
  min-width: 100px;
  padding: 13px 10px;
  box-sizing: border-box;

  border: 1px solid rgb(230,230,230); //수정 -색상
  font-size:14px ;
  border-radius: 4px;
  margin: 0 0 12px;
  font-family: 'S-CoreDream-4Regular'; //수정-폰트
}
button{
  width: 100%;
  min-width: 100px;

  background-color: #ff5757; //수정 -색상
  border-radius: 4px;
  border: none;
  color: #fff; //수정 - 색상
  cursor: pointer;
  margin: 0 0 20px;
  padding: 0;
  height: 44px;
  font-family: 'S-CoreDream-4Regular'; //수정-폰트
}
span{
  font-size: 13px;
  text-align: center;
  color: rgb(109,109,109); //수정 -색상
}
.roter_link{
  a{
    color: #27a3ff; //수정 색상
  }

}


</style>
