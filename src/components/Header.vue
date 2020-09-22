<template>
  <header class="header">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link :to="{name: 'pokedex'}">Pokédex</router-link>
      <router-link :to="{name: 'usuarios'}">Mestres Pokémon</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: #0073de;
  box-shadow: 0px 4px 12px rgba(52, 58, 65, 0.1);
  padding: 20px;
}
.router-link-active {
  color: #fff0d1;
  font-weight: bold;
}

.router-link-exact-active a {
  color: #ff860d;
  font-weight: bold;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  color: #ffffff;
}

nav a:hover {
  color: #fff0d1;
}
</style>