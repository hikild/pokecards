<template>
  <v-app>
    <div class="containerr align-center mb-6">
      <div class="title">
        <h2>Pokédex</h2>
        <img src="@/assets/mochila.svg" />
      </div>
      <div class="pokedex">
        <img class="pokedex-img" src="@/assets/pokedex.png" alt="pokedex" />
        <button @click="antPokemon" class="prev-btn"></button>
        <button @click="proxPokemon" class="next-btn"></button>
        <div v-if="id === null">
          <img class="img" src="@/assets/pokeball.svg" />
        </div>
        <div v-else>
          <div class="pokemonNome">
            <p>{{nomePokemon | capitalize }}</p>
          </div>
          <div class="pokemonTipo">
            <p>{{tipoPokemon | capitalize}}</p>
          </div>
          <div class="pokemonNome2">
            <p>{{nomePokemon}}</p>
          </div>
          <div class="pokemons">
            <img :src="this.img" />
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import api from "../services.js";
export default {
  name: "Pokedex",
  data() {
    return {
      nomePokemon: "",
      tipoPokemon: "",
      img: "",
      id: null,
    };
  },
  methods: {
    async findPokemon(valor) {
      await api.get(`/${valor}`).then((r) => {
        console.log(r.data);
        this.id = r.data.id;
        this.nomePokemon = r.data.name;
        this.tipoPokemon = "Tipo: " + r.data.types[0].type.name;
        this.img = r.data.sprites.front_default;
      });
    },
    proxPokemon() {
      this.findPokemon(this.id + 1);
    },
    antPokemon() {
      if (this.id === 0) {
        return;
      }
      this.findPokemon(this.id - 1);
    },
  },
  // computed: {
  //   ...mapState(["pokemonsPokedex", "pokedex"]),
  // },
  // methods: {
  //   ...mapActions(["getPokedex", "pokemonInPokedex"]),
  //   pokedexItens() {
  //     for (let i = 0; i < this.pokedex.length; i++) {
  //       this.nomesPokemons.push(this.pokedex[i].name);
  //     }
  //   },
  // },
  // created() {
  //   this.pokedexItens();
  //   this.$store.dispatch("pokemonInPokedex", this.nomesPokemons);
  //   this.$store.dispatch("getPokedex");
  // },
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
/* .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 12px rgba(99, 99, 99, 0.158);
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
}
.card-pokemons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */
/*-------POKEDEX----------*/
.pokedex {
  position: relative;
}

.pokedex-img {
  max-width: 600px;
}
.prev-btn {
  position: absolute;
  width: 30px;
  left: 200px;
  padding: 20;
  background: transparent;
  top: 345px;
  height: 25px;
}
.next-btn {
  position: absolute;
  width: 30px;
  left: 250px;
  padding: 20;
  background: transparent;
  top: 345px;
  height: 25px;
}
.pokemonNome {
  position: absolute;
  top: 170px;
  right: 120px;
  color: #44ddc4;
}
.pokemonTipo {
  position: absolute;
  top: 200px;
  right: 120px;
  color: #44ddc4;
}
.pokemonNome2 {
  position: absolute;
  top: 375px;
  left: 95px;
  color: #414885;
  font-size: 12px;
  text-transform: uppercase;
}
.pokemons {
  position: absolute;
  top: 160px;
  left: 120px;
}
.pokemons img {
  width: 100px;
}
.img {
  max-width: 100px;
  position: absolute;
  top: 160px;
  left: 115px;
}
</style>