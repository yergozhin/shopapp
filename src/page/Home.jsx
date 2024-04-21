import '../App.css';
import coke from '../Coke1.5.png';
import sprite from '../Sprite.png';
import snickers from '../Snickers.png';
import { useDispatch } from "react-redux";
import { ADD_PRUDUCT, addProduct,deleteProduct,increment } from "../actions/actions";

const productsTypes = [
    {
      productType: 'Напитки',
      products: [
        {
          name: 'Coca-cola',
          description: 'Газированный напиток',
          price: 600,
          productImage: coke,
          count: 0
        },
        {
          name: 'Sprite',
          description: 'Газированный напиток',
          price: 600,
          productImage: sprite,
          count: 0
        },
      ]
    },
    {
      productType: 'Снеки',
      products: [
        {
          name: 'Батончики Snickers',
          description: 'Шоколадный батончик',
          price: 550,
          productImage: snickers,
          count: 0
        },
      ]
    },
  ]

export default function Home(){
    const dispatch = useDispatch();

    return (
        <div>
            {productsTypes.map(item => (
      <div className='productType'>
      <h1>{item.productType}</h1>
        {item.products.length > 0 && item.products.map(insideItem => (
            insideItem && (
        <div className='product' key={insideItem.name}>
          <div className='product-image'>
            <img src={insideItem.productImage} height={150} alt='coke' />
          </div>
          <div className='product-detail'>
            <h3>{insideItem.name}</h3>
            <h4>{insideItem.description}</h4>
          </div>
          <div className='product-price'>
            <h3>{insideItem.price} ₸</h3>
          </div>
          <div>
            <button onClick={() => dispatch({type:ADD_PRUDUCT,payload: insideItem})}>Add</button>
          </div>
          <div>
            <button onClick={() => dispatch(deleteProduct(insideItem.name))}>Delete</button>
          </div>
          <div>
            <button onClick={() => dispatch(increment(insideItem.name))}>Increment</button>
          </div>
        </div>
            )
        ))}
      </div>
      ))}
        </div>
    )
}