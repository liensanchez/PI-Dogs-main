export const ALLDOGS = 'ALLDOGS'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const ORDERDOGSALPHABETICAL = 'ORDERDOGSALPHABETICAL'
export const ORDERDOGSREVERSEALPHABETICAL = 'ORDERDOGSREVERSEALPHABETICAL'
export const COPYOFDOGS = 'COPYIFDOGS'
export const ORDERDOGSBYORIGINDB = 'ORDERDOGSBYORIGINDB'
export const ORDERDOGSBYORIGINAPI = 'ORDERDOGSBYORIGINAPI'
export const ORDERDOGSBYTEMPERAMENT = 'ORDERDOGSBYTEMPERAMENT'



export const changePage = (page) => {
    return {
      type: CHANGE_PAGE,
      page
  }
}


export const allDogs = () => async (dispatch) => {

  const dogsResponse = await fetch('http://localhost:3003/dogs')

  const dogsInfo = await dogsResponse.json()

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
  

export const orderDogsAlphabetical = (dogs) => {

  return {
    
    type: ORDERDOGSALPHABETICAL,

    payload: dogs
  }
}


export const orderDogsReversed = (dogs) => {

  return {
    
    type: ORDERDOGSREVERSEALPHABETICAL,

    payload: dogs
  }
}


export const orderDogsByOriginDB = () => {

  return {
    
    type: ORDERDOGSBYORIGINDB,


  }
}


export const orderDogsByOriginAPI = () => {

  return {
    
    type: ORDERDOGSBYORIGINAPI,

  }
}


export const orderByTemperament = (temperament) => {

  return {
    
    type: ORDERDOGSBYTEMPERAMENT,

    payload: temperament
  }
}