// import {
//   LOGIN_FAILURE,
//   LOGIN_SUCCESS,
//   LOGOUT,
//   UPDATE_USER,
//   USER,
// } from "./UserActions";

import { userConstant } from "../constant";

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER, UPDATE_USER } =
  userConstant;

const initialState = {
  isLoggedIn: localStorage.getItem("tokenName") ? true : undefined,
  type: undefined,
  user: {},
  message: "",
};
const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: payload.isLoggedIn,
        user: { ...payload.user },
        message: payload.message,
        type: payload.type,
      };

    case LOGIN_FAILURE:
      return {
        isLoggedIn: payload.isLoggedIn,
        user: payload.user,
        message: payload.message,
        type: payload.type,
      };

    case USER:
      return {
        ...state,
        user: { ...payload.user },
        type: payload.type,
      };

    case UPDATE_USER:
      return {
        isLoggedIn: true,
        type: payload.type,
        message: "User is logged in",
        user: {
          ...state.user,
          ...payload.user,
        },
      };

    case LOGOUT:
      return payload;

    default:
      return state;
  }
};
export default UserReducer;
