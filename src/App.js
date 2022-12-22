import './App.css';
import React, { useEffect } from 'react';
import { fetchProducts } from './actions/products.actions';
import { fetchCart } from './actions/cart.actions';
import { fetchUser } from './actions/user.action';
import { useDispatch, useSelector } from "react-redux";
import HomePage from './pages/HomePage';
import Loading from './pages/Loading';

function App() {

  const productsState = useSelector(state => state.productReducer);
  const logged = useSelector(state => state.authReducer.logged)
  const dispatch = useDispatch();
  const { isLoadingProducts } = productsState;

  useEffect(() => {
    dispatch(fetchCart(localStorage.getItem('id')))
    dispatch(fetchProducts())
    dispatch(fetchUser(localStorage.getItem('id')));

  }, [dispatch])

  if (isLoadingProducts === true) {
    return (
     <Loading/>
    )
  } else {
    console.log("Products",productsState)
    
    return (
      <HomePage
        logged={logged}
        products={productsState.products} 
      />
    );
  }

}
export default App;
