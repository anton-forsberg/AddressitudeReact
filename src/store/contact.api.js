import axios from 'axios';
import { Api, ApiResults, ApiSeed } from './config';
import { parseList } from './action-utils';
import { ContactModel } from './contact.model';

export const loadContactsApi = async () => {
    const response = await axios.get(`${Api}?seed=${ApiSeed}&results=${ApiResults}&noinfo&nat=dk`);
    return parseList(response, ContactModel);
}