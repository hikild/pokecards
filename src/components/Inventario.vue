<template>
  <div class="content">
    <div class="containerr">
      <div class="flex">
        <div class="card" v-for="(colecao, index) in colecaoUsuario($route.params.id)" :key="index">
          <h3>{{colecao.nome | capitalize}}</h3>
          <img :src="colecao.foto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Inventario",
  computed: {
    ...mapGetters(["colecaoUsuario"]),
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
h3 {
  color: #b998b6;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content {
  height: 100vh;
}

.card {
  display: flex;
  width: 200px;
  height: 150px;
  margin: 15px 0 15px 15px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 12px rgba(99, 99, 99, 0.158);
  padding: 20px;
  border-radius: 4px;
}

.card p {
  margin-bottom: -10px;
  color: tomato;
}
</style>