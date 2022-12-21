import React from 'react';
import { SideContainer } from '../components/commons/containers';
import Tabs from '../components/Tabs';
import Products from '../components/Products';
import Card from '../components/Card';
import Login from '../components/Login';
import Register from '../components/Register';
import AddProduct from '../components/AddProduct';


function Aside(props) {

  const { episodes } = props;

  const sanitizeEpisodes = (list, keyGetter) => {
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
      mapToArray.push({ season: key, episodes: value });
    }

    return mapToArray;
  }

  const sanitizedEpisodes = sanitizeEpisodes(episodes, episode => episode.SeasonNumber);

  const tabs1 =
    [{ title: 'Products', component: <Products episodes={[{}, {}, {}, {}, {}, {}, {}, {}, {},]} /> },
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
    },
    {
      title: 'Dashboard', component: <Card title="Adding Product"
        description={<AddProduct />}
        buttonValue="Add"
        key={1}> </Card>
    },
    { title: 'Cart', component: <Products episodes={[{}, {}, {}, {}, {}, {}, {}, {}, {},]} /> }
  ]

  return (
    <><Tabs selectedTab={"0"} tabs={tabs1} /></>
  );

}
export default Aside;
