import { useSelector } from "react-redux";

export default function Cart(){
    const products = useSelector((state) => state.products);
    return (
        <div>
            <div className="products">
                <ul>
                    {products?.map((product) => product && (
                        <div className="product">
                            <p key={product.name} className="n">
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </p>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}