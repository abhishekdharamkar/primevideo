import { configureStore } from '@reduxjs/toolkit'
import favReducer from '../app/slice/favSlice'

const store = configureStore({
  reducer: {fav:favReducer},
})

export default store