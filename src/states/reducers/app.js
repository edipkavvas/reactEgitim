import * as Constants from "../constants/app";

const initialState = {
  isAlertOpen: false,
  errorTitle: "",
  errorMessage: "",
  errorButtonText: ""
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case Constants.APP_SET_ALERT_STATUS:
      return {
        ...state,
        isAlertOpen: action.payload.isAlertOpen,
        errorTitle: action.payload.errorTitle,
        errorMessage: action.payload.errorMessage,
        errorButtonText: action.payload.errorButtonText
      };
    default:
      return state;
  }
};

export default app;
