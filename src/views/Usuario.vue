<template>
  <div class="containerr align-center content">
    <div class="links">
      <h2 @click="$store.state.erro = false">
        <router-link :to="{name: 'inventario'}">Ver inventário</router-link>
      </h2>
      <h2>
        <router-link :to="{name: 'adicionar'}">Adicionar figurinhas</router-link>
      </h2>
      <h2>
        <router-link :to="{name: 'editar'}">Editar usuário</router-link>
      </h2>
    </div>
    <transition mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Usuario",
  data() {
    return {
      nome: "",
      usuario: "",
    };
  },
  computed: {
    ...mapState(["usuarios"]),
    ...mapGetters(["userId"]),
  },
  methods: {
    ...mapActions(["editarUsuario"]),
    getUserId() {
      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].id === this.$route.params.id) {
          return (this.usuario = this.usuarios[i].nome);
        }
      }
    },
  },
};
</script>

<style scoped>
.links {
  display: flex;
  align-items: center;
}

h2 a {
  color: #ce3563;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px;
  font-weight: normal;
}

h2 a:hover {
  background: #ce3563;
  color: #fff;
  transition: ease-in 0.3s;
  border-radius: 4px;
}
.content {
  margin-bottom: 40px;
}
.view {
  height: 100%;
}

/* RESPONSIVO */
@media screen and (max-width: 600px) {
  .containerr {
    width: 450px;
  }
}
</style>