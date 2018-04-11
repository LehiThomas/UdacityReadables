import { GET_CATEGORIES } from "../config/consts";

export const getCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories
  };
};
