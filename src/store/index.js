import Vue from "vue";
import Vuex from "vuex";
import api from "../services.js";
import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 0,
    erro: false,
    mostrar: "false",
    adicionado: false,
    usuarios: [],
    colecoes: [],
    figurinhas: [],
    pokemons: [],
  },
  getters: {
    colecaoUsuario(state) {
      return function(dono) {
        return state.colecoes.filter((colecao) => colecao.dono === dono);
      };
    },
    saveId: (state) => {
      let idAtual = localStorage.getItem("id");
      return (state.id = idAtual);
    },
    userId: (state) => {
      return function(id) {
        return state.usuarios.filter((user) => user.id === id);
      };
    },
    dadosUsuarios: (state) =>
      (state.usuarios = JSON.parse(localStorage.getItem("usuarios"))),
    dadosColecoes: (state) =>
      (state.colecoes = JSON.parse(localStorage.getItem("colecoes"))),
  },
  mutations: {
    ADICIONAR_USUSARIOS(state, nome) {
      state.usuarios.push({
        nome,
        id: state.id,
      });
      state.id++;
    },
    BUSCA_POKEMON(state, payload) {
      state.adicionado = false;
      state.mostrar = "true";
      state.pokemons = payload;
      state.erro = false;
    },
    ADD_COLECAO(state, payload) {
      state.colecoes.push({
        caracteristicas: [
          {
            habilidade: payload.abilities[0].ability.name,
            tipo: payload.types[0].type.name,
          },
        ],
        nome: payload.name,
        foto: payload.sprites.front_default,
        dono: router.currentRoute.params.id,
      });
      state.mostrar = "false";
      state.adicionado = true;
    },
    ADD_FIGURINHA(state) {
      state.figurinhas.push({
        nome: state.pokemons.name,
        foto: state.pokemons.sprites.front_default,
        habilidade: state.pokemons.abilities[0].ability.name,
        tipo: state.pokemons.types[0].type.name,
      });
    },
    REMOVER_USUARIO(state, payload) {
      state.usuarios.splice(payload, 1);
      state.id--;
    },
    EDITAR_USUARIO(state, payload) {
      state.usuarios[router.currentRoute.params.id].nome = payload;
    },
  },
  actions: {
    addColecao({ commit }, figurinha) {
      commit("ADD_COLECAO", figurinha);
    },
    addFigurinha({ commit, dispatch }, figurinha) {
      commit("ADD_FIGURINHA", figurinha);
      dispatch("addColecao", figurinha);
      dispatch("salvarColecao");
    },
    addUsuario({ commit, dispatch }, usuario) {
      commit("ADICIONAR_USUSARIOS", usuario);
      dispatch("salvarUsuarios");
      dispatch("salvarColecao");
      dispatch("salvarId");
    },
    removerUsuario({ commit, dispatch }, usuario) {
      commit("REMOVER_USUARIO", usuario);
      dispatch("salvarUsuarios");
      dispatch("salvarColecao");
      dispatch("salvarId");
    },
    editarUsuario({ commit, dispatch }, nome) {
      commit("EDITAR_USUARIO", nome);
      dispatch("salvarUsuarios");
    },
    async buscarPokemons({ commit, state }, buscar) {
      try {
        const response = await api.get(`/${buscar.toLowerCase()}`);
        const result = response.data;
        commit("BUSCA_POKEMON", result);
      } catch (error) {
        state.erro = true;
      }
    },
    salvarUsuarios({ state }) {
      let usuarios = state.usuarios.map((usuario) => {
        let { nome, id } = usuario;
        return { nome, id };
      });
      let dados = JSON.stringify(usuarios);
      window.localStorage.setItem("usuarios", dados);
    },
    salvarId({ state }) {
      let novoId = state.id;
      let idSalvo = JSON.stringify(novoId);
      window.localStorage.setItem("id", idSalvo);
    },
    salvarColecao({ state }) {
      let usuarios = state.colecoes.map((colecao) => {
        let { nome, foto, dono, caracteristicas } = colecao;
        return { nome, foto, dono, caracteristicas };
      });
      let dados = JSON.stringify(usuarios);
      window.localStorage.setItem("colecoes", dados);
    },
  },
  modules: {},
});
