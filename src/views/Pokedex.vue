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

/* RESPONSIVO */
@media screen and (max-width: 600px) {
  .containerr {
    width: 480px;
    height: 500px;
  }

  .pokedex {
    position: relative;
  }

  .pokedex-img {
    max-width: 430px;
  }
  .prev-btn {
    position: absolute;
    width: 30px;
    left: 120px;
    padding: 20px;
    background: transparent;
    top: 240px;
    height: 25px;
  }
  .next-btn {
    position: absolute;
    width: 30px;
    left: 180px;
    padding: 20px;
    background: transparent;
    top: 240px;
    height: 25px;
  }
  .pokemonNome {
    position: absolute;
    top: 120px;
    right: 70px;
  }

  .pokemonNome p,
  .pokemonTipo p {
    color: #fff;
  }
  .pokemonTipo {
    position: absolute;
    top: 140px;
    right: 73px;
  }
  .pokemonNome2 {
    display: none;
  }
  .pokemons {
    position: absolute;
    top: 100px;
    left: 70px;
  }
  .pokemons img {
    width: 100px;
  }
  .img {
    width: 60px;
    position: absolute;
    top: 120px;
    left: 90px;
  }
  button {
    outline: none;
  }
}
</style>