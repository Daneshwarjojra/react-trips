import { PRODUCT_LIST } from "../tpes/constTypes";

export const productInitialState = [];

const productReducer = (state = productInitialState, action) => {
  switch(action.type) {
    case PRODUCT_LIST:
        return [...action.payload];
    default:
      return state;
  };
};

export default productReducer;
