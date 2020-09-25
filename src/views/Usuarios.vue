<template>
  <v-app>
    <div class="containerr mb-6">
      <div class="title">
        <h2>Mestres Pokémon</h2>
      </div>
      <div class="container-usuario" v-if="usuarios.length > 0">
        <div v-for="(usuario, index) in usuarios" :key="index">
          <router-link :to="{name: 'adicionar', params: { id: usuario.id} }">
            <div @click="$store.state.adicionado = false" class="card-usuario">
              <img class="img-usuario" src="@/assets/jogador.svg" :key="index" />
              <p class="nome-usuario">{{usuario.nome | capitalize }}</p>
              <p class="total-figurinhas">{{totalFigurinhas(usuario.id)}}</p>
              <v-btn class="btn" elevation="1" @click.prevent="removerUsuario(index)" large>Remover</v-btn>
            </div>
          </router-link>
        </div>
      </div>
      <div v-else>
        <p>Não há mestres pokémon...</p>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "Usuarios",
  methods: {
    ...mapActions(["removerUsuario"]),
    totalFigurinhas(user) {
      let count = 0;
      for (let i = 0; i < this.dadosColecoes.length; i++) {
        if (this.dadosColecoes[i].dono === user) {
          count++;
        }
      }
      return `Total de figurinhas: ${count}`;
    },
  },
  computed: {
    ...mapState(["usuarios", "id", "adicionado"]),
    ...mapGetters(["dadosUsuarios", "dadosColecoes", "saveId"]),
  },
  mounted() {
    this.dadosUsuarios;
    this.dadosColecoes;
    this.saveId;
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.title h2 {
  color: #ce3563;
  font-size: 3rem;
  font-family: "Staatliches", cursive;
}
.title img {
  width: 100%;
  max-width: 40px;
  margin-left: 30px;
}

.container-usuario {
  display: flex;
  flex-wrap: wrap;
}

p {
  text-align: center;
}

.card-usuario {
  margin-top: 30px;
  margin: 50px 0px 50px 20px;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(40, 50, 60, 0.1);
  align-items: center;
  width: 200px;
  padding: 10px;
  cursor: pointer;
}
.card-usuario img {
  max-width: 200px;
}
.nome-usuario {
  color: #ce3563;
  font-weight: bold;
}
.total-figurinhas {
  color: tomato;
}
.btn {
  width: 50px;
  height: 30px !important;
  font-size: 10px !important;
}

/* RESPONSIVO */
@media screen and (max-width: 600px) {
  .containerr {
    width: 460px;
  }

  .card-usuario {
    margin: 20px 0px 50px 20px;
    height: 240px;
  }

  .title h2 {
    font-size: 2rem;
    margin-top: 10px;
  }

  .card-usuario img {
    width: 100px;
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