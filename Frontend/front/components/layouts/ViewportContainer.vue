<template>
  <div class="lkh-viewportContainer">
    <slot></slot>
  </div>
</template>

<script>
import Container from "./Container";
export default {
  name: "ViewportContainer",
  components: {Container}
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.lkh-viewportContainer {
  position: absolute;
  top: $HeaderHeight;
  padding-bottom: $FooterHeight;
  width: 100%;
  background-color: $SecondaryLight;
}
</style>
