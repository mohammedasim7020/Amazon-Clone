import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducers from "./components/reducers/main";

const middleware = [thunk];
// Creact Store and asingh the thunk to middleWare
const store = createStore(
  rootreducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store
