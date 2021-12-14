/* eslint-disable import/no-anonymous-default-export */
import { SAVE_USER } from "../../constants";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
