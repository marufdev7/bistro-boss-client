import React, { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover
                img={orderCover}
                title={"Order Food"}
                description={"WOULD YOU LIKE TO TRY A DISH?"}
            />
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Desserts</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                            {
                                desserts.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                            {
                                pizza.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                            {
                                soup.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                            {
                                drinks.map(item =>
                                    <FoodCard
                                        key={item._id}
                                        item={item}
                                    />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;