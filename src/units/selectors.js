import { prop, map } from 'ramda';

export const getPhoneById = (state, id) => prop(id, state.phones);

export const getPhones = (state) => map((id) => getPhoneById(state, id), state.phonesPage.ids);
