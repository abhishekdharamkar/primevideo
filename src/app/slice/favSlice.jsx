import { createSlice } from '@reduxjs/toolkit'



export const favSlice = createSlice({
 
  name: 'fav',
  initialState:[],
  reducers: {
    addToFav(state,action){
      state.push(action.payload)
      // state.value.push(
      //   action.payload
      // )
     
    },
    removeFromFav(state,action) {
      state.splice(state.findIndex((id) => id === action.payload), 1);
      // state.value =false
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToFav, removeFromFav } = favSlice.actions

export default favSlice.reducer