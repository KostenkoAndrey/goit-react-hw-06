import { initialValues } from "./store";

const contactsSlice = (state=initialValues, action) => {
    switch (action.type){
        case "contacts/addContacts":
        return {
            ...state,
            contacts: {
                items:[ ...state.contacts.items, action.payload ]
            }
        }
        case "contacts/deleteContacts":
            return {
                ...state,
                contacts: {
                    items: state.contacts.items.filter( item => item.id !== action.payload )
                }
            }
        default:
        return state;
    }
};

export default contactsSlice;