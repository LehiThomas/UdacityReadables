import { GET_CATEGORIES } from "../config/consts";

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
};

export default categoryReducer;
