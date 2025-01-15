import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/addContacts");
export const deleteContacts = createAction("contacts/deleteContacts");
export const filterContacts = createAction("contacts/filterContacts");
