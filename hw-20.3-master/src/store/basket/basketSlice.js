import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "../../lib/fetchApi";

export const basketActionTypes = {
  ADD_ITEM_SUCCES: "ADD_ITEM_SUCCES",
  GET_BUSKET_SUCCESSS: "GET_BUSKET_SUCCESSS",
};

const initialState = {
  items: [],
  error: "",
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
   getBasketSucces(state, action){
    state.items = action.payload;
   },
  },
  extraReducers: (builder) => {
    builder.addCase(addToBasket.rejected, (state, action) => {
      state.error = action.payload
    });
  },
});

export const basketActions = basketSlice.actions

// export const basketReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case basketActionTypes.GET_BUSKET_SUCCESSS:
//       return {
//         ...state,
//         items: action.payload,
//       };

//     default:
//       return state;
//   }
// };


export const getBasket = () => async (dispatch) => {
  try {
    const { data } = await fetchAPI("basket");

    dispatch(basketActions.getBasketSucces(data.items));
  } catch (error) {
    console.log(error);
  }
};

export const addToBasket = createAsyncThunk('basket/addToBasket', async (newItem, {dispatch, rejectWithValue}) => {
  try {
    await fetchAPI(`foods/${newItem.id}/addToBasket`, {
      method: "POST",
      body: { amount: newItem.amount },
    });
    dispatch(getBasket());
  } catch (error) {
   return rejectWithValue('Some thing wen wronf')
  }
}
);

export const updateBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchAPI(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      console.log(error);
    }
  };
export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await fetchAPI(`basketItem/${id}/delete`, {
      method: "DELETE",
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};