import { ALLDOGS, CHANGE_PAGE } from '../action/action'

const initialState = {
  dogs: [],
  currentPage: 1
}

function reducer (state = initialState, action ){
  switch (action.type) {
    case ALLDOGS:
      return { 
              ...state,
              dogs: action.payload
            };
    case CHANGE_PAGE:
      return {
                ...state,
                currentPage: action.page
            }
    default:
      return state;
  }
}


export default reducer