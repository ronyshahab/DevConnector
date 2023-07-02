import { SET_ALERT, REMOVE_ALERT } from "../action/Type";
import {setAlert} from "../action/alert"
const initailState = [];
const actionReader = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export {setAlert}
export default actionReader