import { State } from "jumpstate";

const initialState = {
  isAlertOpen: false,
  errorTitle: "",
  errorMessage: "",
  errorButtonText: ""
};

const appState = State("appState", {
  // Initial State
  initial: initialState,
  // Actions
  reset() {
    return {
      ...initialState
    };
  },
  showAlert(state, payload) {
    return {
      ...state,
      isAlertOpen: true,
      errorTitle: payload.title,
      errorMessage: payload.errorMessage,
      errorButtonText: payload.errorButtonText
    };
  },
  hideAlert(state, payload) {
    return {
      ...state,
      isAlertOpen: false,
      errorTitle: "",
      errorMessage: "",
      errorButtonText: ""
    };
  }
});

export default appState;
