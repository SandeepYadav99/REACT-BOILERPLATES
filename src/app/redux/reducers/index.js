import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";
import LoadingReducer from "./LoaderReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  user: UserReducer,
  modal: ErrorReducer,
});

export default rootReducer;
