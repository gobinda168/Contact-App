import {
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  EDIT_CONTACT,
  CLEAR_CONTACT
} from "../keys";

export default (state, { payload, type }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== payload)
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(c => (c.id === payload.id ? payload : c))
      };
    case EDIT_CONTACT:
      return {
        ...state,
        updatedContact: payload
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        updatedContact: null
      };
    default:
      return state;
  }
};
