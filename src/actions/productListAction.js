import { PRODUCT_LIST } from "../tpes/constTypes";

export const fetchProductList = () => {
  return async function(dispatch) {
    const response = await fetch(
      "https://staging01.loconav.com/api/v5/trucks/72/fastag/txns?time_range[start_time]=1645727400&time_range[end_time]=1645799189&locale=en",
      {
        method: "GET",
        headers: {
          "authorization": "DJqJQ1XyvBAundGCqcyZ"
        },
      }
    );
    const data = await response.json();
    dispatch(setProductList(data.txns));
  }
}

export const setProductList = (products = null) => {
  if (products) {
    return {
      type: PRODUCT_LIST,
      payload: products,
    };
  }
  return {
    type: PRODUCT_LIST,
    payload: [],
  }
}