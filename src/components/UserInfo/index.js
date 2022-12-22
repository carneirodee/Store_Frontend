import './Card.css';
// import  Mobile  from '../../assets/images/Mobile.jsx';

function UserInfo(props) {

    const {title, buttonValue, onclick} = props;
    return (
        <span className="login-info">
            <h1>{title}</h1>           
            {props.children}
            <button onClick={onclick}>{buttonValue}</button>
        </span>
    );
}

export default UserInfo;
