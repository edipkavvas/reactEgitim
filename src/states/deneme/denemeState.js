import { State } from "jumpstate";

const initialState = {
  count: 0,
  denemeField: "",
  errorMessage: ""
};

const denemeState = State("denemeState", {
  // Initial State
  initial: initialState,
  // Actions
  reset() {
    return {
      ...initialState
    };
  },
  setValue(state, payload) {
    return {
      ...state,
      count: payload
    };
  },
  increment(state, payload) {
    return {
      ...state,
      count: parseInt(state.count) + 1
    };
  },
  decrement(state, payload) {
    return {
      ...state,
      count: parseInt(state.count) - 1
    };
  }
});

export default denemeState;
