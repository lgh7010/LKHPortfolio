<template>
  <lkh-ViewportContainer>
    <slot></slot>
  </lkh-ViewportContainer>
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

lkh-ViewportContainer {
  position: relative;
  top: $HeaderHeight;
  margin-bottom: $FooterHeight;
  width: 100%;
  background-color: $SecondaryLight;
}
</style>
