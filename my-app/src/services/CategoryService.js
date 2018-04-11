import axios from "axios";
import store from "../config/store";
import { API, HEADER } from "../config/consts";
import { getCategories } from "../actions/categories";

class CategoryService {
  axiosCategories = async () => {
    const res = await axios(`${API}/categories`, { headers: HEADER });
    store.dispatch(getCategories(res.data));
  };
}

export default new CategoryService();
