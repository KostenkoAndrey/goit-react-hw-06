import { configureStore } from "@reduxjs/toolkit";
import  contactsSlice  from "./contactsSlice";
import  filterSlice  from "./filtersSlice";

export const initialValues = {
contacts: {
    items: [
            { id: 0, name: "Learn HTML and CSS", number: "" },
            { id: 1, name: "Learn HTML and CSS", number: "" },
            { id: 2, name: "Learn HTML and CSS", number: "" },
            { id: 3, name: "Learn HTML and CSS", number: "" },
            { id: 4, name: "Learn HTML and CSS", number: "" },
            { id: 5, name: "Learn HTML and CSS", number: "" }
            ]
},
    filters: {
        name: ""
}
    };


    
export const store = configureStore({
    reducer: {
    contacts: contactsSlice,
    filters: filterSlice,
    }
});