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
      let index = -1
      state.productsCollection.forEach((element, i) => {
        if(element.artnumber === payload.artnumber)
        index = i
      })
      if(index !== -1) {
        state.productsCollection.splice(index, 1, Object.assign({}, payload))
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
