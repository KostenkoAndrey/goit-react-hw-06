import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    contacts:{
        items: []
    },
};


const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContacts: (state, actions) => {
            state.contacts.items.push( actions.payload );
        },
        deleteContacts: (state, actions) => {
            state.contacts.items = state.contacts.items.filter( item => item.id !== actions.payload );
        },
    }

})

export const contactsSlice = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;
export const selectContacts = state => state.contacts.contacts.items;