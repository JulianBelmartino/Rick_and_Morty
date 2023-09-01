export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
import axios from "axios";

// ACTION | addFav
export const addFavorite = (character) => async (dispatch) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      const response = await axios.post(endpoint, character);
      
      return dispatch({
         type: ADD_FAVORITE,
         payload: response.data,
      });
   } catch (error) {
      console.error('Error while adding favorite:', error);
   }
};

export const removeFavorite = (id) => async (dispatch) => {
   try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      const response = await axios.delete(endpoint);

      return dispatch({
         type: REMOVE_FAVORITE,
         payload: response.data,
      });
   } catch (error) {
      console.error('Error while removing favorite:', error);
   }
};

export const filterCards = (gender) => {
    return{type:FILTER,payload:gender}
}
export const orderCards = (orden) => {
    return{type:ORDER,payload:orden}
}