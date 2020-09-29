import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/assets/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentProduct: {},
    productsCollection: data
  },
  getters: {  
    currentProduct: state => state.currentProduct,
    productsCollection: state => state.productsCollection
  },
  mutations: {
    setCurrentProduct(state, payload) {
      state.currentProduct = payload
    },
    setProductsCollection(state, payload) {
      state.productsCollection = payload
    },
    saveEditedProduct(state, payload) {
      const match = state.productsCollection.indexOf(element => element.artnumber === payload.artnumber)
      if(match !== -1) {
        state.productsCollection.splice(match, 1, Object.assign({}, payload))
      }
    },
    saveCreatedProduct(state, payload) {
      state.productsCollection.push(payload)
    },
    deleteProductFromCollection(state, payload) {
      state.productsCollection = state.productsCollection.filter(item => item.artnumber !== payload)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
