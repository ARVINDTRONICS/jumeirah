import ActionTypes from "../action-types";

const initialState = {
  email: "",
  isLoggedIn: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_BY_KEY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
