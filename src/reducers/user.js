import { userConstants } from "../constants/user";

const initState = {
  isLoggedIn: false,
  userData: {
    name: "",
    email: "",
  },
};

export const user = (state = initState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...state,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: {
          ...state.userData,
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
      };
    default:
      return state;
  }
};
