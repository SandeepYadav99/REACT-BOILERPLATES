import { loaderConstant } from "../constant";

const { SHOW_LOADING, HIDE_LOADING } = loaderConstant;

export const showLoading = (title) => {
  return {
    type: SHOW_LOADING,
    payload: { title, isLoading: true },
  };
};

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
    payload: { title: "", isLoading: false },
  };
};
