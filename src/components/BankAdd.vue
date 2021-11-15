<template>
  <PopupModal
    v-model="isShow"
    :modal-name="modalName"
    @click-count="clickCount=$event"
    @is-next-btn-click="isNextBtnClick=$event">
    <!-- activator -->
    <template #activator>
      <button @click="isShow=true">
        추가
      </button> 
    </template>
    <!-- 헤더 -->
    <template #headerTitle>
      <div>logo</div>
      <p>결제 계좌 등록</p>
    </template>
    <template #default>
      <!-- 은행 선택 부분 -->
      <template v-if="!isNextBtnClick">
        <!-- 추가 가능한 은행 목록 -->
        <div class="all_bank_list">
          <template
            v-for="bankItem in Banklist"
            :key="bankItem.id">
            <BankAddItem
              :click-count="clickCount"
              :bank-item="bankItem"
              :click-bank-item="clickBankItem"
              @click-bank-item="clickBankItem=$event"
              @click-count="clickCount=$event" />
          </template>
        </div>
        <div class="control_btn">
          <button
            v-if="clickCount<2"
            @click="isNextBtnClick=true">
            다음
          </button>
          <button
            v-if="clickCount<2"
            @click="resetValue">
            취소
          </button>
          <span v-else>하나만 선택 해주세요</span>
        </div>
      </template>

      <!-- 사용자 입력부분 -->
      <template v-else>
        <div class="userDataInput">
          <!-- 계좌번호 -->
          <div class="item">
            <div class="title">
              <span>계좌 번호</span>
              <span v-show="!checkAccount()"> 계좌 번호 길이를 확인 하세요</span>
              <span v-show="checkAccount()">OK</span>
            </div>
            <input
              v-model="userAccount"
              :placeholder="`계좌번호의 길이 ${bankAccountLength}`"
              type="text"
              @blur="checkAccount" />
          </div>
          <!-- 전화번호 입력 -->
          <div class="item">
            <div class="title">
              <span>전화 번호</span>
              <span v-show="!checkPhoneNum()">-를 빼고 입력해주세요</span>
              <span v-show="checkPhoneNum()">OK</span>
            </div>
            <input
              v-model="userPhoneNum"
              type="text"
              @blur="checkPhoneNum" />
          </div>
          <!-- 계좌 등록 -->
          <div class="item">
            <div class="title">
              <span>계좌 등록 동의</span>
              <span>(필수)</span>
              <span v-show="checkSignature()">OK</span>
            </div>
            <input
              v-model="userSignature"
              type="checkbox" 
              @blur="checkSignature" />
          </div>
        </div>
        <div class="control_btn">
          <button
            @click="addAccount">
            등록
          </button>
          <button
            @click="resetValue">
            취소
          </button>
        </div>
      </template>
    </template>
  </PopupModal>
</template>
<script>
import PopupModal from './PopupModal'
import BankAddItem from './BankAddItem'
import {getUserBankList,getBankList,addBankAccount} from '../utils/bankApi'

export default {
  components:{
    PopupModal,
    BankAddItem
  },
  data(){
    return{
      modalName:'bankAdd',
      isShow:false,
      clickCount:0,
      clickBankItem:null,
      isNextBtnClick:false,
      userAccount:null,
      userPhoneNum:null,
      userSignature:null,
      isVaildAccount:false

    }
  },
  computed:{
    Banklist(){
      return this.$store.state.bank.allBankList?.filter(bank=>bank.disabled===false)
    },
    bankAccountLength(){
       return this.clickBankItem.digits?.reduce((num1,num2)=>num1+num2,0)       
    }
    
  },
  created(){
    getBankList()
    .then((data)=>{
      this.$store.commit('bank/assignState',{allBankList:data})
    })   
  },
  methods:{
    addAccount(){
      // 세가지 항목 다시 한 번 체크
      if(this.checkAccount()&&this.checkPhoneNum()&&this.checkSignature()){
        const vaule={
          bankCode:this.clickBankItem?.code,
          accountNumber:this.userAccount,
          phoneNumber:this.userPhoneNum,
          signature:this.userSignature
        }
        // 서버에 계좌 추가하기
        addBankAccount(vaule).then(()=>{
          alert('계좌 추가 완료')
          this.resetValue()
          // store 데이터 변경
          // 선택 가능한 계좌 목록 업데이트
          getBankList()
            .then((data)=>{
              this.$store.commit('bank/assignState',{allBankList:data})
            }) 
          // 사용자 계좌 목록 업데이트
          getUserBankList()
            .then((data)=>{
              this.$store.commit('bank/assignState',{
              userTotalBalance :data.totalBalance,
              userAccountList:data.accounts
            })
           })
          this.userAccount=null
          this.userPhoneNum=null
          this.userSignature=false
        })

      }
      else{
        console.log('n')
      }
    },
    resetValue(){
      this.isNextBtnClick=false
      this.isShow=false
      this.clickCount=0
    },
    checkAccount(){
      return this.userAccount?.length===this.bankAccountLength
    },
    checkPhoneNum(){
      return (this.userPhoneNum?.length===11) &&(this.userPhoneNum?.indexOf('-')===-1)
    },
    checkSignature(){
      return this.userSignature
    }
  }
  
}
</script>
<style lang="scss" scoped>
@mixin modalContent{
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 3px;

}
.all_bank_list{
  @include modalContent;

}
.userDataInput{
  @include modalContent;
}
.control_btn{
  height: 50px;
  display: flex;
  justify-content: center;
  button{
    width: 50%;
  }
}
</style>
