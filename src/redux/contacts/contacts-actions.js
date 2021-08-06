import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const removeContactRequest = createAction(
  "contacts/removeContactRequest"
);
export const removeContactSuccess = createAction(
  "contacts/removeContactSuccess"
);
export const removeContactError = createAction("contacts/removeContactError");

export const onSearchFilter = createAction("contacts/searchFilter");
