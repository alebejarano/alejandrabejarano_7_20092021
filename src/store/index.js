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
  //vue passes as 1st parameter the state. Aditionally it can pass all existing getters as the 2nd parameter
  getters: {
    getToken: state => {
      return state.token;
    },
    isAuthenticated: state => {
      //returns a boolean
      //is not falsey
      return !!state.token
    },
    getUser: state => {
      return state.user;
    }
  },
  //mutations = setting and updating just one piece of the state
  mutations: {
    //1st parameter is the state, and the 2nd parameter is the payload
    setToken: (state, token) => {
      //set the token in the http headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setUserProfilePic: (state, profilePic) => {
      state.user.profilePic = profilePic; 
    },
    //to logout and to delete the account
    logout: (state) => {
      Object.assign(state, getDefaultState());
      router.push('/guest/login');
    }
  },
});
//actions = make the call - axios call: ej: FetchProducts. Never update the state.
