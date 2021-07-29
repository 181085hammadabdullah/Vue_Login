import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);
import Admin from "./Modules/Admin/Index";
import Worker from "./Modules/Worker/Index";
export default new Vuex.Store({

    modules: {
        Admin: Admin,
        Worker
    }
});