import { combineReducers } from 'redux';
import { contactsReducer } from './contact.reducer';

export * from './contact.reducer';
export * from './contact.actions';
export * from './contact.saga';

const store = combineReducers({
    contacts: contactsReducer
});

export default store;