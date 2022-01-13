/* REST */
import { GET, POST } from "../../services/rest.service";
// import store from '../store';

/* ACTIONS */
import { userConstant } from "../constant";
import { showModal } from "./ErrorAction";
import { hideLoading } from "./LoaderActions";

const {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  USER,
  UPDATE_USER,
} = userConstant;

/* LOGIN */
export const login = (payload) => {
  return (dispatch) => {
    POST("/", payload)
      .then(({ data }) => {
        localStorage.setItem("tokenName", data._token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            isLoggedIn: true,
            user: data.user,
            message: "logged in successfully",
          },
        });

        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: {
            isLoggedIn: false,
            user: {},
            type: undefined,
            message: err.message,
          },
        });
        dispatch(hideLoading());
        dispatch(showModal(err.message));
      });
  };
};

export const getLoggedInUser = () => {
  return (dispatch) => {
    const url = `/`;
    GET(url)
      .then(({ data }) => {
        dispatch({
          type: USER,
          payload: {
            user: data,
            type: data.type,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: {
            user: {},
            type: undefined,
            isLoggedIn: false,
            message: err.message,
          },
        });
      });
  };
};
