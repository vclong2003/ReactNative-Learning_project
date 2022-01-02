import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOrder from '../../screen/NewOrder';
import OrderHistory from '../../screen/OrderHistory';

const Tab = createMaterialTopTabNavigator();

const OrderTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14},
        tabBarActiveTintColor: 'rgba(0, 24, 51, 1)',
        tabBarInactiveTintColor: 'rgba(216, 216, 216, 1)',
        tabBarIndicatorStyle: {
          backgroundColor: 'rgba(50, 74, 89, 1)',
        },
        
      }}>
      <Tab.Screen
        name="NewOrder"
        component={NewOrder}
        options={{title: 'Текущий'}}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{title: 'История'}}
      />
    </Tab.Navigator>
  );
};

export default OrderTab;
