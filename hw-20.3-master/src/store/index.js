import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { basketReducer, basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  [mealsSlice.name]: mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));