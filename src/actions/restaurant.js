import ActionTypes from "../action-types";
import { getRestaurantsService } from "../services/getRestaurantsService";
export function updateRestaurantByKey(payload) {
  return {
    type: ActionTypes.UPDATE_RESTAURANT_BY_KEY,
    payload
  };
}

export function getRestaurantsAction() {
  return async (dispatch, getState) => {
    let payload = await getRestaurantsService();
    dispatch(updateRestaurantByKey({ restaurant: payload }));

    return payload;
  };
}
