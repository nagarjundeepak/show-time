import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/rootReducer";
const middleware = [thunk];

const store = createStore(RootReducer, compose(applyMiddleware(...middleware)));

export default store;
