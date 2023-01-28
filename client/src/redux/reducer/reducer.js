import { ALLDOGS, CHANGE_PAGE, ORDERDOGSALPHABETICAL,ORDERDOGSREVERSEALPHABETICAL, COPYOFDOGS, ORDERDOGSBYORIGINDB, ORDERDOGSBYORIGINAPI } from '../action/action'

const initialState = {
  dogs: [],
  dogsWithFilters: [],
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
    case COPYOFDOGS:
      return {
                ...state,
                dogsWithFilters: action.payload
            }
    case ORDERDOGSALPHABETICAL:
      return {
                ...state,
                dogsWithFilters:[...state.dogsWithFilters].sort((a, b) => a.name.localeCompare(b.name))
            }
    case ORDERDOGSREVERSEALPHABETICAL:
      return {
                ...state,
                dogsWithFilters:[...state.dogsWithFilters].sort((a, b) => b.name.localeCompare(a.name))
            }
    case ORDERDOGSBYORIGINDB:
      return {
                ...state,
                dogsWithFilters:[...state.dogsWithFilters].filter(dog => dog.id.length > 3)
            }
    case ORDERDOGSBYORIGINAPI:
      return {
                ...state,
                dogsWithFilters:[...state.dogsWithFilters].filter(dog => dog.id.length <= 3)
            }
    default:
      return state;
  }
}


export default reducer