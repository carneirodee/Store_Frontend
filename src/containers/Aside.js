import React, { useEffect } from 'react';
import Tabs from '../components/Tabs';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Login from '../components/Login';
import UpdateUser from '../components/UpdateUser';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import { fetchProduct } from '../actions/products.actions';
import { authenticate } from '../actions/auth.actions';
import { useDispatch, useSelector } from "react-redux";


function Aside(props) {

  // const product = useSelector(state => state.productsReducer.product)

  const { products } = props;
  const { cart } = props;
  const { logged } = props;
  const dispatch = useDispatch();
  let type = localStorage.getItem('type');
  let total = 0;
  useEffect(() => {
    cart.cart.map((productId, key) => {
      let product = products.find(({ _id }) => _id === productId);
      total += Number(product.price)
    })
    dispatch(authenticate({ token: localStorage.getItem('token') }));
    console.log("Total", total)
  }, [dispatch])


  const tabs1 =
    [{ title: 'Products', component: <Products products={products} cartState={cart} />,           
      position: false
    },
    {
      title: 'Register', component:
        <Register title="Register"
          buttonValue="Register"
          key={1}> </Register>,
          position: true
    },
    {
      title: 'Login', component: <Login title="Login"
        buttonValue="Login"
        key={1}> </Login>,
        position: true
    }
    ]

  logged === true && tabs1.pop();

  logged === true && tabs1.pop();

  logged === true && type !== 'admin' && tabs1.push({
    title: 'Cart',  component:<Cart cartState={cart} products={products} />,
      position: false
  });

  logged === true && tabs1.push({
    title: 'Dashboard', component: <> <Dashboard title="Adding Product"
    buttonValue="Add"
    key={1}> </Dashboard><UpdateUser title="Update Data"
    buttonValue="Update"
    key={1}> </UpdateUser></> ,
      position: true
  });

  return (
    <><Tabs selectedTab={"0"} tabs={tabs1} total={total} /></>
  );

}
export default Aside;
