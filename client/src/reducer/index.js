import { combineReducers } from "redux";
import actionReader from "../reducer/alert"
export default combineReducers({
    alert: actionReader
});
