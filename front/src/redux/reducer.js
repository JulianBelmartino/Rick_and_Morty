import { ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER } from "./action";

const initialState ={
    myFavorites: [],
    allCharacters: []
};
const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_FAVORITE:
         return { ...state, myFavorites: action.payload, allCharacters: action.payload };
  
         case REMOVE_FAVORITE:
         return { ...state, myFavorites: action.payload };
        
         case FILTER:
            
            let filteredCharacters = [...state.myFavorites]
            if (action.payload === 'all') {
                return { ...state, myFavorites: filteredCharacters };
            } else if ( action.payload === 'Female' || action.payload === 'Male' || action.payload === 'Genderless' ||  action.payload === 'unknown'){
                 let result = filteredCharacters.filter(char => char.gender === action.payload);
                return { ...state,myFavorite: filteredCharacters, filteredResult: result  };
            }

        case ORDER:
            const orderedCharacters = [...state.myFavorites];
            if (action.payload === "A") {
              orderedCharacters.sort((a, b) => a.id - b.id); 
            } else if (action.payload === "D") {
              orderedCharacters.sort((a, b) => b.id - a.id); 
            }
            return {...state, myFavorites: orderedCharacters}   

        default:
            return {...state}
    }
}
export default rootReducer