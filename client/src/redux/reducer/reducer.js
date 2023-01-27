import { ALLDOGS, CHANGE_PAGE, ORDERDOGS } from '../action/action'

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
    case ORDERDOGS:
      return {
                ...state,
                dogs: action.payload
            }
    default:
      return state;
  }
}


export default reducer