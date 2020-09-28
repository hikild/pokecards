<template>
  <div class="content">
    <div class="flex">
      <h2>Editar Usuário</h2>
      <v-row class="d-flex align-center" no-gutters>
        <v-text-field class="input-text" v-model="nome" label="Nome" required></v-text-field>
      </v-row>
      <p class="erro">{{nomeInvalido}}</p>
      <v-row class="d-flex align-center" no-gutters>
        <v-btn class="btn" elevation="1" @click="editar(nome)" large>Salvar</v-btn>
      </v-row>
      <img src="@/assets/snorlax.png" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EditarUsuario",
  data() {
    return {
      nome: "",
      nomeInvalido: "",
    };
  },
  methods: {
    ...mapActions(["editarUsuario"]),
    editar(nome) {
      this.nomeInvalido = "";
      if (nome === "") {
        return (this.nomeInvalido = "Digite um nome válido.");
      } else {
        this.editarUsuario(nome);
        this.nome = "";
        this.$router.push({ name: "usuarios" });
      }
    },
  },
};
</script>

<style scoped>
.content {
  height: 100vh;
}

.flex {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 30px;
}

.flex img {
  width: 100%;
  max-width: 340px;
  margin-top: 50px;
}

h2 {
  color: #ce3563;
  font-size: 3rem;
  font-family: "Staatliches", cursive;
  margin-bottom: 20px;
}

.theme--light.v-input,
  .theme--light.v-input input,
  .theme--light.v-input textarea {
    width: 600px;
  }

/* RESPONSIVO */

@media screen and (max-width: 600px) {
  .content {
    height: 600px;
  }
  .flex img {
    width: 100%;
    max-width: 250px;
    margin-top: 100px;
  }

  .theme--light.v-input,
  .theme--light.v-input input,
  .theme--light.v-input textarea {
    width: 300px;
  }

  h2 {
    color: #ce3563;
    font-size: 2rem;
    font-family: "Staatliches", cursive;
    margin-bottom: 20px;
  }
}
</style>
