import {
    LOAD_CONTACT,
    LOAD_CONTACT_SUCCESS,
    LOAD_CONTACT_ERROR
} from './contact.actions'

let initState = {
    loading: false,
    data: [],
    error: void 0
}

export const contactsReducer = (state = initState, action) => {
    switch(action.type) {
        case LOAD_CONTACT:
            return { ...state, loading: true, error: '' };
        case LOAD_CONTACT_SUCCESS:
            return { ...state, loading: false, data: [...action.payload] };
        case LOAD_CONTACT_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}