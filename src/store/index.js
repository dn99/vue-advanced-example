import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            console.log(context)
            fetchNewsList()
                .then( response => {
                    console.log(response.data)
                    context.commit('SET_NEWS', response.data);
                } )
                .catch( error => console.log(error) )
        }
    }
})