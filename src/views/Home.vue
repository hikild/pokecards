<template>
  <v-app>
    <div class="containerr align-center">
      <img class="banner" src="@/assets/coroa.svg" />
      <div class="line"></div>
      <h1 class="text-center">Poké Cards</h1>
      <p class="text-center">Busque e adicione sua coleção de figurinhas do Pokémon!</p>
      <div class="flex">
        <v-text-field class="input-text" v-model="nome" label="Nome" required></v-text-field>
        <p class="erro">{{nomeInvalido}}</p>
        <v-btn class="btn" elevation="1" @click="addUser(nome)" large>Adicionar usuário</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      nome: "",
      nomeInvalido: "",
    };
  },
  methods: {
    ...mapActions(["addUsuario"]),
    addUser(nome) {
      this.nomeInvalido = "";
      if (nome === "") {
        return (this.nomeInvalido = "Digite um nome válido.");
      } else {
        this.addUsuario(nome);
        this.nome = "";
        this.$router.push({ name: "usuarios" });
      }
    },
  },
};
</script>

<style scoped>
.input-text {
  margin-right: 20px;
}
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
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
.erro {
  background: none;
  color: red;
  align-self: flex-start;
  margin-bottom: 50px;
}

.v-input {
  width: 450px;
  margin-top: 10px;
}

/* RESPONSIVO */

@media screen and (max-width: 600px) {
  .v-application .align-center {
    width: 450px;
  }

  .banner {
    width: 100px;
  }

  h1 {
    font-size: 2rem;
    margin-top: 10px;
  }

  .v-input {
    width: 300px;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
  }
}
</style>