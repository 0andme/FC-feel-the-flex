
export default {
  namespaced: true,
  state: () => ({
    currentUser:null
  }),
  getters:{},
  mutations:{
    assignState(state,payload){
      Object.keys(payload).forEach(key=>{
        state[key]=payload[key]
      })
    }
  },
  actions:{
    
  }
}
