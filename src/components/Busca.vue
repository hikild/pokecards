<template>
  <section>
    <div v-if="$store.state.mostrar === 'false'">
      <div class="flex">
        <img src="@/assets/pokeball.svg" />
        <h1 class="text-center">{{titulo}}</h1>
        <div class="line"></div>
        <p class="text-center">{{texto}}</p>
        <div class="flex">
          <v-row class="d-flex align-center" no-gutters style="height: 100px; width: 700px;">
            <v-text-field class="input-text" v-model="buscar" label="Buscar" required></v-text-field>
            <v-btn class="btn" elevation="1" @click.prevent="buscarPokemons(buscar)" large>Buscar</v-btn>
          </v-row>
        </div>
      </div>
    </div>
    <div v-else-if="$store.state.mostrar === 'true'">
      <div class="flex">
        <img src="@/assets/pokeball.svg" />
        <h1 class="text-center">{{titulo}}</h1>
        <div class="line"></div>
        <p class="text-center">{{texto}}</p>
        <div class="flex">
          <v-row class="d-flex align-center" no-gutters style="height: 100px; width: 700px;">
            <v-text-field class="input-text" v-model="buscar" label="Buscar" required></v-text-field>
            <v-btn class="btn" elevation="1" @click.prevent="buscarPokemons(buscar)" large>Buscar</v-btn>
          </v-row>
        </div>
        <div class="card">
          <h3>{{pokemons.name | capitalize}}</h3>
          <img :src="pokemons.sprites.front_default" />
          <p>Tipo: {{pokemons.types[0].type.name | capitalize}}</p>
          <p>Habilidade: {{pokemons.abilities[0].ability.name | capitalize}}</p>
        </div>
        <v-btn class="btn" @click.prevent="addFigurinha(pokemons)">Adicionar</v-btn>
      </div>
    </div>
    <div v-if="$store.state.adicionado === false"></div>
    <div class="adicionado rotate" v-else>
      <img src="@/assets/gotcha.svg" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Busca",
  data() {
    return {
      buscar: "",
    };
  },
  props: ["titulo", "texto", "id"],
  methods: {
    ...mapActions(["buscarPokemons", "addFigurinha"]),
  },
  computed: {
    ...mapState(["pokemons", "usuarios"]),
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.title h2 {
  color: #ce3563;
  font-family: "Staatliches", cursive;
}
.title img {
  width: 100%;
  max-width: 40px;
  margin-left: 30px;
}
.flex img {
  max-width: 80px;
}
.input-text {
  margin-right: 20px;
}
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 150px;
}
.flex p {
  margin-top: 10px;
  margin-bottom: 50px;
}
.container {
  max-width: 900px;
  background-color: #ececec;
  border-radius: 4px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 12px rgba(255, 55, 205, 0.158);
}
.banner {
  width: 100%;
  max-width: 200px;
}

.line {
  width: 250px;
  height: 2px;
  background: #ff6363;
}

h1 {
  color: #ce3563;
  font-family: "Staatliches", cursive;
  font-size: 3rem;
}

.adicionar {
  align-self: flex-start;
}
.card {
  display: flex;
  width: 300px;
  height: 320px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 12px rgba(99, 99, 99, 0.158);
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-top: 10%;
}

.card p {
  margin-bottom: -10px;
  color: tomato;
}

.adicionado {
  display: flex;
  justify-content: center;
  margin-top: 300px;
}
.adicionado img {
  max-width: 200px;
  animation: rotate;
}
.rotate {
  -webkit-animation: rotate 0.6s ease-in-out 2 alternate-reverse both;
  animation: rotate 0.6s ease-in-out 2 alternate-reverse both;
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>