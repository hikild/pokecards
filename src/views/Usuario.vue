<template>
  <div class="containerr align-center content">
    <div class="links">
      <h2>
        <router-link :to="{name: 'inventario'}">Ver inventário</router-link>
      </h2>
      <h2>
        <router-link :to="{name: 'adicionar'}">Adicionar figurinhas</router-link>
      </h2>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Usuario",
};
</script>

<style scoped>
.links {
  display: flex;
  align-items: center;
}

h2 a {
  color: #ce3563;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px;
  font-weight: normal;
}

h2 a:hover {
  background: #ce3563;
  color: #fff;
  transition: ease-in 0.3s;
  border-radius: 4px;
}
.content {
  margin-bottom: 40px;
}
</style>