<template>
  <Container>
    <ViewportContainer>

      <div class="box"></div>

    </ViewportContainer>
    <Header></Header>
    <Footer></Footer>
  </Container>
</template>

<script>
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import ViewportContainer from "../../components/layouts/ViewportContainer";
import Container from "../../components/layouts/Container";
import gsap from "gsap";
export default {
  name: "index",

  components: {Container, ViewportContainer, Footer, Header, gsap},

  mounted() {
    this.boxRotation()
  },
  methods: {
    boxRotation(){
      const gsap = this.$gsap
      gsap.to('.box', {rotation: 27, x: 100, duration: 1})
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  top: 100px;
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
