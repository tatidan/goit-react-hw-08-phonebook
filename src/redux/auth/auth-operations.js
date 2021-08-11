import axios from "axios";
import {
  registerError,
  registerRequest,
  registerSuccess,
} from "./auth-actions";

axios.defaults.baseURL = "https://shop-49287-default-rtdb.firebaseio.com";

// const token = {
//   set(token) {},
//   unset() {},
// };

export const registerOperation = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};
