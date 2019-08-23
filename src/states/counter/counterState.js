import { State, Effect } from "jumpstate";
import serviceCaller from "../../config/axios";

const initialState = {
  counterValue: 0,
  id: "",
  token: "",
  errorMsg: ""
};

const counterState = State("counterState", {
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
      counterValue: payload
    };
  },
  setServiceCallResponseFields(state, payload) {
    return {
      ...state,
      id: payload.id,
      token: payload.token
    };
  },
  setServiceCallError(state, payload) {
    return {
      ...state,
      errorMsg: payload.errorMsg
    };
  }
});

counterState.denemeServiceCall = Effect("denemeServiceCall", payload => {
  return new Promise(resolve => {
    let result = false;
    serviceCaller
      .post("/register", payload)
      .then(data => {
        result = data;
        counterState.setServiceCallResponseFields(data);
      })
      .catch(error => {
        counterState.setServiceCallError(error);
      })
      .finally(() => {
        resolve(result);
      });
  });
});

export default counterState;
