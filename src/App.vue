<template>
  <v-app>
    <div id="#app">
      <Header />
      <main>
        <transition mode="out-in">
          <router-view />
        </transition>
      </main>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
}
#app {
  background: url("./assets/banner.jpg") repeat-x;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.btn {
  background: #ce3563 !important;
  color: #fff !important;
}
.containerr {
  width: 900px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

p {
  color: #8d678a;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
