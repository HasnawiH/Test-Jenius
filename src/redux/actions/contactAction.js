import { getAllContact } from "../../service";

export const setContactAll = (value) => {
    return {
        type: "GET_CONTACT",
        payload: value
    };
};

export const fetchContactAll = () => {
    return async (dispatch) => {
        try {
            const response = await getAllContact()
            if (response?.status === 200) {
                const { data } = response?.data
                dispatch(setContactAll(data));
            } else {
                //handle error message
            }
        } catch (error) {
            //handle error message
        }
    };
};