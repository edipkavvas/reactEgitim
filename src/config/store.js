import { createStore, combineReducers, applyMiddleware } from "redux";
import { CreateJumpstateMiddleware } from "jumpstate";
import states from "../states";

export const store = createStore(
  combineReducers(states),
  applyMiddleware(CreateJumpstateMiddleware())
);
