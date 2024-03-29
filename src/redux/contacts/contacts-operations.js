import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contacts-actions";

axios.defaults.baseUrl = "https://connections-api.herokuapp.com";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addNewContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const removeContact = (contactId) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(removeContactSuccess(contactId));
  } catch (error) {
    dispatch(removeContactError(error.message));
  }
};
//==============================================================

// axios
// .get("/contacts.json")
// .then(({ data }) =>
//   dispatch(
//     fetchContactsSuccess(
//       Object.keys(data).map((key) => ({
//         id: key,
//         ...data[key],
//       }))
//     )
//   )
// )
// .catch((error) => dispatch(fetchContactsError(error)));

// axios
//   .post("/contacts.json", contact)
//   .then(
//     ({ data }) => dispatch(addContactSuccess({ id: data.name, ...contact }))
//     // dispatch({ type: "contacts/addContactSuccess", payload: data })
//   )
//   .catch(
//     (error) => dispatch(addContactError(error))
//     // dispatch({ type: "contacts/addContactError", payload: error })
//   );

// axios
//   .delete(`/contacts/${contactId}.json`)
//   .then(() => dispatch(removeContactSuccess(contactId)))
//   .catch((error) => dispatch(removeContactError(error)));

// ====================================================

// import { createAsyncThunk } from "@reduxjs/toolkit";

// const fetchContactsAsync = createAsyncThunk(
//   "contacts/fetchContacts",
//   async () => {
//     const response = await axios.get("/contacts");
//     return await response.json();
//     // const { data } = await axios.get("/contacts");
//     // return await data;
//   }
// );
