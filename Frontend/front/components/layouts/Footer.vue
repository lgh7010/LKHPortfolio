<template>
 <lkh-Footer>
   푸터
 </lkh-Footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

lkh-Footer {
  background-color: $Black;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: $FooterHeight;
  color: $White;
}
</style>
