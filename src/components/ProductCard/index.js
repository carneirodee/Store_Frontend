import './ProductCard.css';
// import  Mobile  from '../../assets/images/Mobile.jsx';

function ProductCard(props) {

    const {title, imgSrc, description, price, buttonValue, onclick} = props;
    return (
        <span className="product-card">
            <h1>{title}</h1>
            {props.children}
            <p>{description}</p>
            <h1>{price}</h1>
            <button onClick={onclick}>{buttonValue}</button>
        </span>
    );
}

export default ProductCard;
