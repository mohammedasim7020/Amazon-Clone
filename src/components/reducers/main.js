import { getProductsreducer } from "./productsreducer";
import { combineReducers } from "redux";

const rootreducers = combineReducers({
  getproductsData: getProductsreducer,
});
export default rootreducers;