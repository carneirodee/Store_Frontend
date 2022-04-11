import React, { useState, useEffect } from 'react';
import { TabsContainer, TabsNav, TabsPanel, Tab, TabItem } from './Tabs';

function Tabs(props) {

    const { tabs, selectedTab, icon } = props;


    const [currentTab, setCurrentTab] = useState(selectedTab);

    const goTo = (key) => {
        setCurrentTab(key);
    }
    
    return (
        <TabsContainer>
            <TabsNav>
                {tabs.map((tab, key) => {
                    return <Tab key={`${key}`} href="#"  dataKey={`${key}`} selected={currentTab} onClick={() => { goTo(`${key}`) }}>{tab.title.toUpperCase()}</Tab>
                })}
           {icon ?
              icon: '' 
            }
            </TabsNav>
           
            <TabsPanel>
                {tabs.map((tab, key) => {
                    return <TabItem key={`${key}`} dataKey={`${key}`} visibility={currentTab}>{tab.component}</TabItem>
                })}
            </TabsPanel>
        </TabsContainer>
    )
}

export default Tabs;
