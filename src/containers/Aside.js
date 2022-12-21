import React from 'react';
import Tabs from '../components/Tabs';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Card from '../components/Card';
import Login from '../components/Login';
import Register from '../components/Register';
import AddProduct from '../components/AddProduct';
import { login } from '../actions/auth.actions';
import { registerUser } from '../actions/user.action';


function Aside(props) {

  const { products } = props;
  const { user } = ''
  const { logged } = ''

  const sanitizeProducts = (list, keyGetter) => {
    const map = new Map();
    const mapToArray = [];
    list.forEach((item) => {
      if (item != null) {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      }
    });
    for (const [key, value] of map.entries()) {
      mapToArray.push({ season: key, products: value });
    }

    return mapToArray;
  }

  const sanitizedProducts = sanitizeProducts(products, episode => episode.SeasonNumber);

  const tabs1 =
    [{ title: 'Products', component: <Products products={products} /> },
    {
      title: 'Register', component:
        <Card title="Register"
          description={<Register />}
          buttonValue="Register"
          key={1}> </Card>
    },
    {
      title: 'Login', component: <Card title="Login"
        description={<Login />}
        buttonValue="Login"
        key={1}> </Card>
    }
    ]

  user === 'admin' && tabs1.push({
    title: 'Dashboard', component: <Card title="Adding Product"
      description={<AddProduct />}
      buttonValue="Add"
      key={1}> </Card>
  });

  logged === true && tabs1.push({ title: 'Cart', component: 
  <Cart products={[{}, {}, {}, {}, {}, {}, {}, {}, {},]} /> });

  return (
    <><Tabs selectedTab={"0"} tabs={tabs1} /></>
  );

}
export default Aside;
