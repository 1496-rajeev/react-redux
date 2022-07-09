import { countConstants } from '../constants';

export const increaseCount = (payload) => {
  return {
    type: countConstants.COUNT_INCREASE,
    payload: payload,
  };
};

export const decreaseCount = (payload) => {
  return {
    type: countConstants.COUNT_DECREASE,
    payload: payload,
  };
};
