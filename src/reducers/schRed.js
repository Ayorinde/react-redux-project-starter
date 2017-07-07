import {Map, List} from 'immutable';
const iniState = Map({schools:List([])});

export function schRed(state = iniState, action) {
  switch (action.type) {
  case 'GET_SCHOOLS': console.log(action.payload);
    state = state.merge({schools: List(action.payload)}); return state;
  default: return state;
  }
}