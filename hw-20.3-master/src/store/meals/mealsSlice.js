import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "../../lib/fetchApi";

export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (payload, {dispatch, rejectWithValue }) => {
 console.log(thunkApi);
 try {
   const { data } = await fetchAPI("foods");

   return data;
  } catch (error) {
   rejectWithValue("Some thing went wrong");
  }
}
)




export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
  extraReducers: (builder) => {
      builder.addCase(getMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(getMeals.pending,(state, action) => {
      state.isLoading = true
    });
    builder.addCase(getMeals.rejected,(state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    });
 }
}


})


export const mealActions = mealsSlice.actions


// export const getMeals = () => async (dispatch) => {
//   try {
//     dispatch(mealActions.getMealsStarted());

//     const { data } = await fetchAPI("foods");

//     dispatch(mealActions.getMealsSuccess(data));
//   } catch (error) {
//     dispatch(mealActions.getMealsFailed());
//   }
// };
