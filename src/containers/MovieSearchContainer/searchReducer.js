import { types } from './searchAction';
const defaultState = {
  description: '',
  lineItems: [],
  text: []
};

export default function SearchReducer (state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.INPUT_FIND: {
      console.log(state)
      return {
        ...state,
        //description:payload.description
        description: payload.description
        //payload.description
        
      }
      
    }
    case `${types.CLICK_GO}_FULFILLED`: {
      const { description } = action.payload;
      const { Title,Released,Plot,Poster,imdbID } = action.payload;
      
      return {
        description: '',
        action: '',
        lineItems: [
            ...state.lineItems,
            // plus a new object
           { Title,Released,Plot,Poster,imdbID },
           
        ],
      };
      
    }
   
  default: {
      return state;
    }
  }
}

