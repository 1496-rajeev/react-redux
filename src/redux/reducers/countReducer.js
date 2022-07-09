import { countConstants } from '../constants';

const initialState = {
  count: 0,
  countOne: 6,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case countConstants.COUNT_INCREASE:
      return { ...state, count: action.payload };
    case countConstants.COUNT_DECREASE:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
