import { indexBy, prop } from 'ramda';
import { FETCH_PHONES_SUCCESS } from 'constants/actionType';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS: {
      const newPhones = indexBy(prop('id'), payload);
      return { ...state, ...newPhones };
    }
    default:
      return state;
  }
};
