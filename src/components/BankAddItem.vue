<template>
  <li 
    :class="{'isClick':isClick}"
    @click="isClicked">
    <div :class="[`bank_${bankItem.code} banklist_item`]">
      <span class="ico"></span>
      <span>{{ bankItem.name }}</span>
    </div>
  </li>
</template>
<script>
export default {
  props:{
    bankItem:{
      type:Object,
      required:true,
      default:null
    },
    clickCount:{
      type:Number,
      default:0
    }
  },
  emits:['clickCount','clickBankItem'],
  data(){
    return{
      isClick:false
    }
  },
  methods:{
    isClicked(){
      this.isClick=!this.isClick
      if(this.isClick===false){
        this.$emit('clickCount',this.clickCount-1)
      }
      else{
        this.$emit('clickCount',this.clickCount+1)
        this.$emit('clickBankItem',this.bankItem)
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
li{
  width: 50%;
  list-style:none;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  &.isClick{
    background-color:lightgreen;
  }
}
.banklist_item{
  
  padding: 50px 2px 8px;
  cursor: pointer;
  span{
    display: block;
    text-align: center;
    // height: 50px;
    // line-height: 20px;
  }

}

</style>
