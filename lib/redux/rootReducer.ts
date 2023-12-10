/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice, taskSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
}
export const taskReducer = {
  tasks: taskSlice.reducer,
}
export const rootReducer = combineReducers({
  stateA: counterSlice.reducer,
  stateB: taskSlice.reducer
})
