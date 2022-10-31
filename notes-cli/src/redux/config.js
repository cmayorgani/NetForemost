import { combineReducers } from "redux";
import notes from "./notes";

const rReducer = combineReducers({
    notes,
});

export default rReducer;