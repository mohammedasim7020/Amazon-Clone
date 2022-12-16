export const getProducts = () => async (dispatch) => {
  try {
    const data = await fetch("http://localhost:8005/getproducts", {
      method: "Get",
      headers: { "content-type": "application/json" },
    });
    const resp = await data.json();
    console.log(resp);
    dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: resp });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};
