import axios from 'axios'

export const FETCH_SPELL_START = 'FETCH_SPELL_START'
export const FETCH_SPELL_SUCCESS = 'FETCH_SPELL_SUCCESS'
export const fetchSpells = () => (dispatch) => {
  dispatch({type: FETCH_SPELL_START})
  axios
    .get('https://www.dnd5eapi.co/api/spells/')
    .then(res => {
      dispatch({ type: FETCH_SPELL_SUCCESS, payload: res.data.results})
    })
    .catch(err => console.log(err))
}

const thunk = store => next => action => {
  if (typeof action === 'object') {
    next(action)
  } else if (typeof action  === 'function') {
    action(store.dispatch())
  }
}
