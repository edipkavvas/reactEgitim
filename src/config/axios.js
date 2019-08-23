import axios from "axios";
import appState from "../states/app/appState";

let errorMessage = "";

let serviceCaller = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 60000
});

// Add a request interceptor
serviceCaller.interceptors.request.use(
  config => {
    // Your Interceptor code to do something with the request data
    // Return config
    return config;
  },
  error => {
    // Your Interceptor code to do something with request error
    // Return error
    appState.showAlert({
      title: "Hata!",
      errorMessage: error.response.data.error
    });
    return Promise.reject(handleNetworkErrors(error));
  }
);

serviceCaller.interceptors.response.use(
  response => {
    // Your Interceptor code to do something with the response data
    if (isResponseOk(response)) {
      // Return response data
      return response.data;
    } else {
      // Return error
      appState.showAlert({
        title: "Hata!",
        errorMessage: errorMessage
      });
      return Promise.reject(errorMessage);
    }
  },
  error => {
    // Your Interceptor code to do something with response error
    // Return error
    appState.showAlert({
      title: "Hata!",
      errorMessage: error.response.data.error
    });
    return Promise.reject(handleNetworkErrors(error));
  }
);

const isResponseOk = response => {
  if (response && response.data) {
    errorMessage = "";
    return true;
  } else {
    errorMessage = response.data.error;
    return false;
  }
};

const handleNetworkErrors = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    //console.log(error.response.data);
    //console.log(error.response.status);
    //console.log(error.response.headers);
    return error.response.status + " - " + error.response.data.error;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    return error.request._response;
  } else {
    // Something happened in setting up the request that triggered an Error
    return error.message;
  }
};

export default serviceCaller;
