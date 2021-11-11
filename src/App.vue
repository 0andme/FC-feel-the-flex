<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>
<style lang="scss">
body{
  font-family: 'S-CoreDream-4Regular';
;
}
</style>
