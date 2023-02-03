import axios from "axios"

export const ALLDOGS = 'ALLDOGS'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ORDERDOGSALPHABETICAL = 'ORDERDOGSALPHABETICAL'
export const ORDERDOGSREVERSEALPHABETICAL = 'ORDERDOGSREVERSEALPHABETICAL'
export const COPYOFDOGS = 'COPYIFDOGS'
export const ORDERDOGSBYORIGINDB = 'ORDERDOGSBYORIGINDB'
export const ORDERDOGSBYORIGINAPI = 'ORDERDOGSBYORIGINAPI'
export const ORDERDOGSBYTEMPERAMENT = 'ORDERDOGSBYTEMPERAMENT'
export const ORDERDOGSBYWEIGHTASC = 'ORDERDOGSBYWEIGHTASC'
export const ORDERDOGSBYWEIGHTDSC = 'ORDERDOGSBYWEIGHTDSC'



export const changePage = (page) => {
    return {
      type: CHANGE_PAGE,
      page
  }
}


export const allDogs = () => async (dispatch) => {

  const { data: dogsInfo } = await axios.get('/dogs');

  dispatch({

      type: ALLDOGS,

      payload: dogsInfo
  });
}


export const copyOfDogs = (dogs) => {

  return {
    
    type: COPYOFDOGS,

    payload: dogs
  }
}
  

export const orderByTemperament = (temperament) => {

  return {
    
    type: ORDERDOGSBYTEMPERAMENT,

    payload: temperament
  }
}


export const orderDogsByOriginDB = () => {

  
  return {
    
    type: ORDERDOGSBYORIGINDB,


  }
}


export const orderDogsByOriginAPI = () => {

  return {
    
    type: ORDERDOGSBYORIGINAPI

  }
}


export const orderDogsAlphabetical = () => {

  return {
    
    type: ORDERDOGSALPHABETICAL,
  }
}


export const orderDogsReversed = () => {

  return {
    
    type: ORDERDOGSREVERSEALPHABETICAL,
  }
}


export const orderDogsWeightAsc = () => {

  return {
    
    type: ORDERDOGSBYWEIGHTASC,
  }
}


export const orderDogsWeightDsc = () => {

  return {
    
    type: ORDERDOGSBYWEIGHTDSC,
  }
}