import { FETCH_SPELL_START,FETCH_SPELL_SUCCESS } from '../actions'
const initalState = {
  spells: [],
  isLoading: true,
  error: ''
}

export const spellReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_SPELL_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_SPELL_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        spells: action.payload,
        isLoading: false,
      }
      
      
    default:
      return state
  }
}
