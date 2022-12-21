import './ProductCard.css';
// import  Mobile  from '../../assets/images/Mobile.jsx';

function ProductCard(props) {

    const {title, imgSrc, description, buttonValue, onclick} = props;
    return (
        <span className="product-card">
            <h1>{title}</h1>
            {props.children}
            <p>{description}</p>
            <button onClick={onclick}>{buttonValue}</button>
        </span>
    );
}

export default ProductCard;
