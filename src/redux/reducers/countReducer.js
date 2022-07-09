import { countConstants } from '../constants';

initialState = {
  count: 0,
  countOne: 6,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case countConstants.COUNT_INCREASE:
      return { ...state, count: count + 1 };
    case countConstants.COUNT_DECREASE:
      return { ...state, count: count - 1 };
    default:
      return state;
  }
};
