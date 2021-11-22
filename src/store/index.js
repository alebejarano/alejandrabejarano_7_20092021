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
  //state = data 
  state: getDefaultState(),
  //getters = computed properties
  getters: {
    getToken: state => {
      return state.token;
    },
    isAuthenticated: state => {
      //returns a boolean
      //is not falsey
      return !!state.token
    }
    /*getUser: state => {
      return state.user;
    }*/
  },
  //mutations = setting and updating just one piece of the state
  mutations: {
    setToken: (state, token) => {
      //set the token in the http headers
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
});
//actions = make the call - axios call: ej: FetchProducts. Never update the state.
