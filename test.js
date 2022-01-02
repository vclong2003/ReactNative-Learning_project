import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './src/screen/Welcome';
import Authorization from './src/screen/Authorization';

const Tab = createBottomTabNavigator();

const testApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Auth" component={Authorization} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default testApp;
