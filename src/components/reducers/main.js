import { getProductsreducer } from "./productsreducer";
import { combineReducers } from "redux";

// Create Combine Reducer
const rootreducers = combineReducers({
  getproductsData: getProductsreducer,
});
export default rootreducers;