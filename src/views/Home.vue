<template>
  <v-app>
    <div>
      <div class="containerr align-center mb-6">
        <img class="banner" src="@/assets/coroa.svg" />
        <div class="line"></div>
        <h1 class="text-center">Poké Cards</h1>
        <p class="text-center">Busque e adicione sua coleção de figurinhas do Pokémon!</p>
        <div class="flex">
          <v-row class="d-flex align-center" no-gutters style="height: 100px; width: 700px;">
            <v-text-field class="input-text" v-model="nome" label="Nome" required></v-text-field>
          </v-row>
          <v-row class="d-flex align-center" no-gutters style="height: 100px; width: 700px;">
            <v-btn class="btn" elevation="1" @click="addUser(nome)" large>Adicionar usuário</v-btn>
          </v-row>
        </div>
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
    };
  },
  methods: {
    ...mapActions(["addUsuario"]),
    addUser(nome) {
      this.addUsuario(nome);
      this.nome = "";
      this.$router.push({ name: "usuarios" });
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
</style>