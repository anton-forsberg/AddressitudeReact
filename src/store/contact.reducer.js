import {
    LOAD_CONTACT,
    LOAD_CONTACT_SUCCESS,
    LOAD_CONTACT_ERROR,
    SEARCH_CONTACT,
    ORDER_CONTACT
} from './contact.actions'

let initState = {
    loading: false,
    orderBy: { 
        field: 'name', 
        reverse: false 
    },
    data: [],
    searchTerm: '',
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
        case SEARCH_CONTACT:
            return { ...state, searchTerm: action.payload}
        case ORDER_CONTACT:
            return { ...state, orderBy: action.payload}
        default:
            return state;
    }
}