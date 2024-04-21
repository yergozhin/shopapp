export const ADD_PRUDUCT = "ADD_PRUDUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const INCREMENT = "INCREMENT";

export const addProduct = (product) => {
    return{
        type: ADD_PRUDUCT,
        payload: product
    };
};
export const deleteProduct = (name) => {
    return{
        type: DELETE_PRODUCT,
        payload: name
    };
};
export const increment = (name) => {
    return{
        type: INCREMENT,
        payload: name
    };
};
