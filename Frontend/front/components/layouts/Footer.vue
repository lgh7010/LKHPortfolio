<template>
 <div class="lkh-footer">
   푸터
 </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.lkh-footer {
  background-color: $Black;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: $FooterHeight;
  color: $White;
}
</style>
