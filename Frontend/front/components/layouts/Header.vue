<template>
 <lkh-Header>
   헤더
 </lkh-Header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

lkh-Header {
  background-color: $Primary;
  position: fixed;
  top: 0px;
  width: 100%;
  height: $HeaderHeight;
  color: $White;
}
</style>
