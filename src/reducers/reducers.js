import { ADD_PRUDUCT, DELETE_PRODUCT, INCREMENT } from "../actions/actions";

const initialState = {
    products: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRUDUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        name: action.payload.name,
                        description: action.payload.description,
                        price: action.payload.price,
                        productImage: action.payload.productImage,
                        count: 1,
                    }
                ]
            };
            case DELETE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter(product => product && product.name !== action.payload)
                };
                case INCREMENT: 
                return {
                  ...state,
                  products: state.products.map(product => {
                    if (product.name === action.payload) {
                      return {
                        ...product,
                        count: product.count + 1
                      };
                    }
                    return product;
                  })
                };
        default:
            return state;
    }
}
export default reducer;