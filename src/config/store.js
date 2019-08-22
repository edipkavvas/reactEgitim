import { createStore, combineReducers } from "redux";
import { rootReducer } from "../states/reducers";

export const store = createStore(combineReducers(rootReducer));
