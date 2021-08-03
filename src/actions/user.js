import { userConstants } from "../constants/user";

export const userLoginRequest = (user) => {
  return {
    type: userConstants.LOGIN_REQUEST,
    payload: {
      user,
    },
  };
};

export const userLoginSuccess = (user) => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};
