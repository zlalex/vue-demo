import Vue from 'vue';
import Vuex from 'vuex';
import crumbs from './modules/crumbs';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        crumbs
    }
})