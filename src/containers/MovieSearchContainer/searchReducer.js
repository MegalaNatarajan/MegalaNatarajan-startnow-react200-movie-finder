import { types } from './searchAction';
const defaultState = {
  description: '',
  lineItems: [],
  
};

export default function SearchReducer (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.INPUT_FIND: {
      
      return {
        ...state,
        description: payload.description
      }
      
    }
    case `${types.CLICK_GO}_FULFILLED`: {
      const { description } = action.payload;
     // const { Title,Released,Plot,Poster,imdbID } = action.payload;
      const { Search } = action.payload;
      return {
        description: '',
        action: '',
        lineItems: [
            ...state.lineItems,
            // plus a new object
            { Search }
           //{ Title,Released,Plot,Poster,imdbID },
           
        ],
      };
      
    }
   
  default: {
      return state;
    }
  }
}

