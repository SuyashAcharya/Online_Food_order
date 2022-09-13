export const fetchProductData = (state) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:8000/products`)
      .then((response) => response.json())
      .then((result) =>
        //dispatch response to the store
        dispatch({ type: "ProductData", payload: result })
      );
  };
};
export const cardShow = (state) => {
  return (dispatch, getState) => {
    dispatch({ type: "cardShowOrNot", payload: !state });
  };
};
export const addCartItem = (state , action) => {
  return (dispatch, getState) => {
    //console.log(action);
    console.log(state);
    dispatch({ type: "addItem", payload: state});
  };  
};
export const deleteCartItem = (state , action) => {
  return (dispatch, getState) => {
    console.log(state);
    dispatch({ type: "removeItem", payload: state});
  };  
};
export const deleteItem = (state , action) => {
  return (dispatch, getState) => {
    console.log(state);
    dispatch({ type: "deleteItem", payload: state});
  };  
};
