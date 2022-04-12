import React from 'react';
import { SideContainer } from '../components/commons/containers';
import Tabs from '../components/Tabs';
import Episodes from '../components/Episodes';


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

  const tabs1 = sanitizedEpisodes.length > 0 ?
    sanitizedEpisodes.map((epi) => {
      return { title: 'T' + epi.season, component: <Episodes episodes={epi.episodes} /> }
    })
    : [{ title: 'T', component: <></> },
    { title: 'T', component: <></> },
    { title: 'T', component: <></> }]


  return (
    <SideContainer><Tabs selectedTab={"0"} tabs={tabs1} /></SideContainer>
  );

}
export default Aside;
