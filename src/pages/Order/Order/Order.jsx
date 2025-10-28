import React, { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Cover
                img={orderCover}
                title={"Order Food"}
                description={"WOULD YOU LIKE TO TRY A DISH?"}
            />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Desserts</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;