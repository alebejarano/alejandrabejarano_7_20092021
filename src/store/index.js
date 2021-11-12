import { createStore } from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'
import router from '../router/routes';

const getDefaultState = () => {
  return {
    token: null,
    user: null
  };
};

export default createStore({
  strict: true, //Do not enable strict mode when deploying for production!
  plugins: [new VuexPersistence().plugin],
  state: getDefaultState(),
  getters: {
    getToken: state => {
      return state.token;
    },
    isAuthenticated: state => {
      return !!state.token
    }
    /*getUser: state => {
      return state.user;
    }*/
  },
  //mutations = setting and updating just one piece of the state
  mutations: {
    setToken: (state, token) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    logout: state => {
      Object.assign(state, getDefaultState());
      router.push('/guest/login');
    }
  },
  /*actions: {
    login: ({
      commit,
      //dispatch
    }, {
      token,
      user
    }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
      // set auth header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({
      commit
    }) => {
      commit('RESET', '');
    }
  }*/
});

//state = data 
//getters = computed properties
//actions = make the call - axios call: ej: FetchProducts. Never update the state.
