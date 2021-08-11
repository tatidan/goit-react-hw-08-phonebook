import axios from "axios";
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./auth-actions";

// axios.defaults.baseURL = "https://shop-49287-default-rtdb.firebaseio.com";
// axios.defaults.baseUrl = "https://connections-api.herokuapp.com";
// axios.defaults.baseUrl = "https://lpj-tasker.herokuapp.com";
// axios.defaults.baseUrl = "https://goit-phonebook-api.herokuapp.com";

const BASE_url = "https://connections-api.herokuapp.com";
// const BASE_url = "https://goit-phonebook-api.herokuapp.com";
// https://connections-api.herokuapp.com/users/signup

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerOperation = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(BASE_url + "/users/signup", credentials);
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const loginOperation = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(BASE_url + "/users/login", credentials);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logoutOperation = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUserOperation = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get("users/current");
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
