import { createStore } from "redux";
import reducer from "./reducers/CountReducer";
const store = createStore(reducer)

export default store;