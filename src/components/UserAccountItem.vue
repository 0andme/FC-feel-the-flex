<template>
  <div class="account_list_item">
    <!-- 이미지 -->
    <img
      :src="bankLogo.find(data=>data.code===userBank?.bankCode)?.src"
      :alt="userBank?.bankName" />
    <!-- 은행명 -->
    <span>{{ userBank?.bankName }}</span>
    <!-- 계좌 번호 -->
    <div class="summary">
      <span>{{ userBank?.accountNumber }}</span>
      <!-- 계좌 금액 -->
      <span>{{ userBank?.balance }}</span>
    </div>
    <!-- 삭제 -->
    <button @click="delUserBank">
      삭제
    </button>
  </div>
</template>
<script>
import {getBankList,getUserBankList,delUserBank} from '~/utils/bankApi'
export default {
  props:{
    userBank:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      bankLogo:[
        {
          src:'/bankIco/bank_081.png',
          code :'081',
          name:'하나은행'
        },
        {
          src:'/bankIco/bank_088.png',
          code :'088',
          name:'신한은행'
        },
        {
          src:'/bankIco/bank_004.png',
          code :'004',
          name:'KB국민은행'
        },
        {
          src:'/bankIco/bank_020.png',
          code :'020',
          name:'우리은행'
        },
        {
          src:'/bankIco/bank_089.png',
          code :'089',
          name:'케이뱅크'
        },
        {
          src:'/bankIco/bank_090.png',
          code :'090',
          name:'카카오뱅크'
        },
        {
          src:'/bankIco/bank_011.png',
          code :'011',
          name:'"NH농협은행"'
        },
      ]
    }
  },
  methods:{
    delUserBank(){
      if(confirm(`${this.userBank?.bankName} 계좌를 삭제하시겠습니까?`)){
        const value={
          accountId:this.userBank.id,
          signature:true
        }
        delUserBank(value).then(()=>{
          getUserBankList().then((data)=>{
            this.$store.commit('bank/assignState',{
            userTotalBalance :data.totalBalance,
            userAccountList:data.accounts
            })
          })
          getBankList()
            .then((data)=>{
              this.$store.commit('bank/assignState',{allBankList:data})
            }) 
        })
      }
    }
  }
  
}
</script>
<style lang="scss" scoped>
.account_list_item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  img{
    width: 32px;
    height: 32px;
  }
  .summary{
    width: 40%;
    text-align: start;
  }
  span{
    color: #565960;
  }
  button{
    display: inline-block;
    padding: 0 10px;
    border: 1px solid #d7dbdc;
    background-color: #fff;
    line-height: 24px;
    font-size: 11px;
    color: #646465;
  }

}
</style>
