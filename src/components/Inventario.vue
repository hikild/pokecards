<template>
  <div class="content">
    <div class="containerr">
      <div class="flex">
        <div class="card" v-for="(colecao, index) in colecaoUsuario($route.params.id)" :key="index">
          <h3>{{colecao.nome | capitalize}}</h3>
          <img :src="colecao.foto" />
          <ul class="flex">
            <li v-for="(caracteristica, key) in colecao.caracteristicas" :key="key">
              <p>Habilidade: {{caracteristica.habilidade | capitalize}}</p>
              <p>Tipo: {{caracteristica.tipo | capitalize}}</p>
            </li>
          </ul>
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
  align-items: center;
}
.card {
  display: flex;
  width: 200px;
  height: 200px;
  margin: 15px 0 15px 15px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 12px rgba(99, 99, 99, 0.158);
  border-radius: 4px;
}

.card p {
  margin-bottom: -10px;
  color: tomato;
}
.flex p {
  font-size: 12px;
  margin: 0;
}
ul li {
  list-style: none;
}

ul li p {
  margin-top: 20px;
}

.content {
  height: 100vh;
}

/* RESPONSIVO */
@media screen and (max-width: 600px) {
  .content,
  .containerr {
    width: 450px;
  }

  h1 {
    font-size: 2rem;
  }

  .flex p {
    font-size: 14px;
  }
}
</style>
