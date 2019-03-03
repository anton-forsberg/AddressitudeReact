export const LOAD_CONTACT = '[Contacts] LOAD_CONTACT';
export const LOAD_CONTACT_SUCCESS = '[Contacts] LOAD_CONTACT_SUCCESS';
export const LOAD_CONTACT_ERROR = '[Contacts] LOAD_CONTACT_ERROR';
export const SEARCH_CONTACT = '[Contacts] SEARCH_CONTACT';
export const ORDER_CONTACT = '[Contacts] ORDER_CONTACT';

export const loadContactsAction = () => {
    return { type: LOAD_CONTACT }
};

export const searchContactsAction = (searchTerm) => {
    return { payload: searchTerm, type: SEARCH_CONTACT }
};

export const orderContactsAction = (orderBy) => {
    return { payload: orderBy, type: ORDER_CONTACT }
};