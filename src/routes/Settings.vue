<template>
  <h1>설정</h1>
  <div class="devider"></div>
  <div class="container">
    <!-- 기존 프로필 출력 -->
    <div>
      <input
        type="file"
        @change="selectFile" />
    </div>
    <div><img :src="profileImgBase64" /></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
//devider
.devider{
  width: 100%;
  border-bottom: 1px solid #3d3d3d;  // 수정 색상 태그
  margin : 10px 0;
}
</style>
