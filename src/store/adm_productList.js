import axios from 'axios'

export default{
  namespaced: true,
  state: {
    productsList: [],
  },
  mutations: {
    setProductsList(state, payload){
      state.productsList = payload
    },
  },
  actions: {
    async readProducts({commit}){
      const productsList = await requestRead()
      commit('setProductsList', productsList)
    },

  }
}

async function requestRead() {
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products',
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'flex',
      'masterKey': true
    }
  })
  return data
}
