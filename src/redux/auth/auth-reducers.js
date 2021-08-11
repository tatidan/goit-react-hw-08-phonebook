import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import {
//   registerRequest,
//   registerSuccess,
//   registerError,
//   loginRequest,
//   loginSuccess,
//   loginError,
//   logoutRequest,
//   logoutSuccess,
//   logoutError,
//   getCurrentUserRequest,
//   getCurrentUserSuccess,
//   getCurrentUserError,
// } from "./auth-actions";

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {});
const token = createReducer(null, {});
const error = createReducer(null, {});

export default combineReducers({ user, token, error });
