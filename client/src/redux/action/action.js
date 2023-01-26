export const ALLDOGS = 'ALLDOGS'
export const CHANGE_PAGE = 'CHANGE_PAGE'


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
};
