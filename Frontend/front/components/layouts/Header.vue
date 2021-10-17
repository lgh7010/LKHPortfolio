<template>
 <div class="lkh-header">
   헤더
 </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.lkh-header {
  background-color: $Primary;
  position: fixed;
  top: 0px;
  width: 100%;
  height: $HeaderHeight;
  color: $White;
}
</style>
