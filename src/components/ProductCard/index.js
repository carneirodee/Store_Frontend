import './ProductCard.css';
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, fetchProducts } from '../../actions/products.actions';

function ProductCard(props) {

    const type = localStorage.getItem('type')

    const {title, imgSrc, description, price, buttonValue, onclick, id} = props;

    const dispatch = useDispatch();

    function removeFromStore(e, id) {
        console.log(id)
        dispatch(removeProduct(id))
        dispatch(fetchProducts())

    }
    return (
        <span className="product-card">
            <h1>{title}</h1>
            {props.children}
            <p>{description}</p>
            <h1>{price}</h1>
            <button onClick={type === 'admin' ? (e)=> removeFromStore(e, id) : onclick}>{type === 'admin' ? 'Remove' : buttonValue}</button>
        </span>
    );
}

export default ProductCard;
