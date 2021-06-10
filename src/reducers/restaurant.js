import ActionTypes from "../action-types";

const initialState = {
  restaurant: {},
  orders: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_RESTAURANT_BY_KEY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
