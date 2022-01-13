import { loaderConstant } from "../constant";

const { SHOW_LOADING, HIDE_LOADING } = loaderConstant;

const initialState = {
  title: "",
  isLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...action.payload,
      };

    case HIDE_LOADING:
      return initialState;

    default:
      return state;
  }
};

export default LoadingReducer;
