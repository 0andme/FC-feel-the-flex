<template>
  <div class="item">
    <div class="item__header">
      <span> <slot name="item_name"></slot></span>
      <button
        :class="{clicked:isChangeMode}"
        @click="changeMode">
        {{ buttonContent }}
      </button>
    </div>
    <div class="item__content">
      <slot
        v-if="!isChangeMode"
        name="beforChange"></slot>
      <slot v-if="isChangeMode"></slot>
    </div>
    <button
      v-if="isChangeMode"
      @click="editDataFunction">
      저장
    </button>
  </div>
</template>
<script>
export default {
  props:{
    editDataFunction:{
      type:Function,
      required:true
    }
  },
  data(){
    return{
      isChangeMode:false,
      buttonContent:'변경'
    }
  },
  methods:{
    changeMode(){
      this.isChangeMode=!this.isChangeMode
      if(this.isChangeMode===true){this.buttonContent='취소'}
      else{this.buttonContent='변경'}
    },
  }
}
</script>
<style lang="scss" scoped>
.item{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding : 10px;
  .item__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    button{
      background-color: transparent;
      border: none;
      color:#27a3ff ;
      content: '변경';
      &.clicked{
        color: red;
        content: '취소';
        &:hover{
        text-decoration: underline;
      }
      }
      &:hover{
        text-decoration: underline;
      }
      
    }
  }
  .item__content{
    width:100%;
    padding: 10px 0;
    font-size: .8rem;
  }
  button{
    width: 100px;
    font-size: 16px;
    line-height: 30px;
    height: 40px;
    background-color: rgb(61, 61, 61);
    border-radius: 4px;
    padding: 0 16px;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    margin: 0;
    border:0;
    cursor: pointer;
  }
}
</style>
