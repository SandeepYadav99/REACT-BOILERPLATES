import { errorConstant } from "../constant";

const { SHOW_MODAL, HIDE_MODAL } = errorConstant;

const initialState = {
  message: "",
  isshow: false,
  flag: false,
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...action.payload,
      };

    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};

export default ErrorReducer;
