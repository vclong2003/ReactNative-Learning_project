import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoreScreen from '../../screen/StoreScreen';
import GiftScreen from '../../screen/GiftScreen';
import OrderScreen from '../../screen/OrderScreen';
import StoreStack from '../StoreStack/index';
import Gift from '../../screen/Gift';
import OrderTab from '../OrderTab';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#324A59',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="StoreStack"
        component={StoreStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../../assets/icons/store_icon.png')}
                style={{tintColor: color}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="GiftScreen"
        component={Gift}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../../assets/icons/gift_icon.png')}
                style={{tintColor: color}}
              />
            );
          },
          headerTitle:'Вознаграждение',
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderTab}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                source={require('../../assets/icons/order_icon.png')}
                style={{tintColor: color}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
