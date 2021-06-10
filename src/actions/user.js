import ActionTypes from "../action-types";

export function updateUserByKey(payload) {
  return {
    type: ActionTypes.UPDATE_USER_BY_KEY,
    payload
  };
}
