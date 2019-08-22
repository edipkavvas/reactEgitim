import * as Constants from "../constants/counter";
import { store } from "../../config/store";
import serviceCaller from "../../config/axios";

export const setValue = value => {
  store.dispatch({
    type: Constants.COUNTER_SET_VALUE,
    payload: {
      value: value
    }
  });
};

export const denemeServiceCall = postData => {
  return new Promise(resolve => {
    let result = false;
    serviceCaller
      .post("/register", postData)
      .then(data => {
        result = data;
        store.dispatch({
          type: Constants.COUNTER_REGISTER_SUCCESS,
          payload: {
            id: data.id,
            token: data.token
          }
        });
      })
      .catch(error => {
        store.dispatch({
          type: Constants.COUNTER_REGISTER_FAILURE,
          payload: {
            errorMsg: error
          }
        });
      })
      .finally(() => {
        resolve(result);
      });
  });
};
