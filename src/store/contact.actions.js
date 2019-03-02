export const LOAD_CONTACT = '[Contacts] LOAD_CONTACT';
export const LOAD_CONTACT_SUCCESS = '[Contacts] LOAD_CONTACT_SUCCESS';
export const LOAD_CONTACT_ERROR = '[Contacts] LOAD_CONTACT_ERROR';

export const loadContactsAction = () => {
    return { type: LOAD_CONTACT }
};