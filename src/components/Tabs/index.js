import React, { useState, useEffect } from 'react';
import { TabsContainer, TabsNav, TabsPanel, Tab, TabItem } from './Tabs';

function Tabs(props) {

    const { tabs, selectedTab } = props;


    const [currentTab, setCurrentTab] = useState(selectedTab);

    const goTo = (key) => {
        setCurrentTab(key);
        console.log("Current Tab", key)
    }

    useEffect(() =>{
        console.log('USE', typeof currentTab)
    }, [currentTab])

    return (
        <TabsContainer>
            <TabsNav>
                {tabs.map((tab, key) => {
                    return <Tab key={`${key}`} href="#"  dataKey={`${key}`} selected={currentTab} onClick={() => { goTo(`${key}`) }}>{tab.title.toUpperCase()}</Tab>
                })}
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
