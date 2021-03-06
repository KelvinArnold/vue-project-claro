import vue from 'vue';
import vuex from 'vuex';
import modules from './modules';

vue.use(vuex);

export default new vuex.Store({
  modules,
})