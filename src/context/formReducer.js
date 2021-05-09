import { SET_FORM, REMOVE_FORM} from "../constants";

export const formReducer = (state, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: action.payload,
       
      };
    case REMOVE_FORM:
      return {
        ...state,
        form: {},
     
      };
    default:
      return state;
  }
};

export const nameReducer = (state, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        name: action.payload,
       
      };
    case REMOVE_FORM:
      return {
        ...state,
        name: {},
     
      };
    default:
      return state;
  }
};
