import * as Constants from "../constants/counter";

const initialState = {
  counterValue: 0,
  id: "",
  token: "",
  errorMsg: ""
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case Constants.COUNTER_SET_VALUE:
      return {
        ...state,
        counterValue: action.payload.value
      };
    case Constants.COUNTER_REGISTER_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token
      };
    case Constants.COUNTER_REGISTER_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      };
    default:
      return state;
  }
};

export default counter;
