import { initialValues } from "./store";

const filterSlice = (state=initialValues, action) => {
    switch (action.type){
    case "contacts/filterContacts":
        return {
            ...state,
            filters: {
                name: action.payload 
            }
        }
        default:
        return state;
    }
};

export default filterSlice;