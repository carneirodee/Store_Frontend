import './App.css';
import React, { useEffect } from 'react';
import { fetchProducts } from './actions/products.actions';
import { useDispatch, useSelector } from "react-redux";
import HomePage from './pages/HomePage';
import Loading from './pages/Loading';

function App() {

  const productsState = useSelector(state => state.productReducer)
  const dispatch = useDispatch();
  const { isLoadingProducts } = productsState;

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (isLoadingProducts === true) {
    return (
     <Loading/>
    )
  } else {
    console.log("Products",productsState)
    
    return (
      <HomePage 
        products={productsState.products} 
      />
    );
  }

}
export default App;
