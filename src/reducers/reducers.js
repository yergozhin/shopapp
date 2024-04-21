import { ADD_PRUDUCT, DELETE_PRODUCT } from "../actions/actions";

const initialState = {
    products: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRUDUCT:
            return {
                products: [
                    ...state.products,
                    {
                        name: action.payload.name,
                        description: action.payload.description,
                        price: action.payload.price,
                        productImage: action.payload.productImage,
                        count: action.payload.count,
                    }
                ]
            }
            case DELETE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter(product => product && product.name !== action.payload)
                };
        default:
            return state;
    }
}
export default reducer;