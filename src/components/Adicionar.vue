<template>
  <div class="content">
    <Busca titulo="Adicionar Card" texto="Busque e adicione sua coleção de figurinhas do Pokémon!" />
  </div>
</template>

<script>
import Busca from "@/components/Busca.vue";
export default {
  name: "Adicionar",

  components: {
    Busca,
  },
};
</script>

<style scoped>
.footer {
  top: 75px;
}
.content {
  height: 100vh;
}
</style>