import React from 'react';
import { FooterContainer } from '../components/commons/containers/index';
import Tabs from '../components/Tabs';
import General from '../components/General';
import Cast from '../components/Cast';
import { TelecineLogo } from '../assets'

function Footer(props) {

  const { synopsis, cast } = props;

  const tabs = [
    {
      title: 'General',
      component: <General synopsis={synopsis} />
    },
    {
      title: 'Elenco',
      component: <Cast cast={cast} />

    },
    {
      title: 'Premiações',
      component: <Cast cast={cast} />
    }
  ]

  return (
    <FooterContainer><Tabs selectedTab={"0"} tabs={tabs} icon={<TelecineLogo />}></Tabs></FooterContainer>
  );
}

export default Footer;
