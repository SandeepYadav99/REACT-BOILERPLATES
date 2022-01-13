import { errorConstant } from "../constant";

const { SHOW_MODAL, HIDE_MODAL } = errorConstant;

export const showModal = (message, success) => {
  return {
    type: SHOW_MODAL,
    payload: { message, isshow: true, success: success },
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
    payload: { message: "", isshow: false, success: false },
  };
};
