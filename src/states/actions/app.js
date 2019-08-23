import * as Constants from "../constants/app";
import { store } from "../../config/store";

export const showAlert = errorInfo => {
  store.dispatch({
    type: Constants.APP_SET_ALERT_STATUS,
    payload: {
      isAlertOpen: true,
      errorTitle: errorInfo.title,
      errorMessage: errorInfo.errorMessage,
      errorButtonText: errorInfo.errorButtonText
    }
  });
};

export const hideAlert = () => {
  store.dispatch({
    type: Constants.APP_SET_ALERT_STATUS,
    payload: {
      isAlertOpen: false,
      errorTitle: "",
      errorMessage: "",
      errorButtonText: ""
    }
  });
};
