import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screen/Welcome';
import Authorization from './src/screen/Authorization';
import ForgotPwd from './src/screen/ForgotPwd';
import Registration from './src/screen/Registration';
import {TouchableOpacity, Image} from 'react-native';
import Verification from './src/screen/Verification';
import SelectMagicCoffee from './src/screen/SelectMagicCoffee';
import MainTab from './src/nav/MainTab';
import Profile from './src/screen/Profile';
import MyOrders from './src/screen/MyOrders';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  ForgotPwd: undefined;
  Reg: undefined;
  Verification: {
    confirmation: FirebaseAuthTypes.ConfirmationResult;
  };
  SelectMagicCoffee: undefined;
  MainTab: undefined;
  Profile: undefined;
  MyOrders: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({navigation}) => {
            return {
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTintColor: '#000',
              title: '',
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    style={{marginLeft: 2}}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Image
                      source={require('./src/assets/icons/back_icon.png')}
                    />
                  </TouchableOpacity>
                );
              },
            };
          }}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={Authorization}
            options={() => {
              return {
                headerTitle: '',
                animation: 'slide_from_right',
              };
            }}
          />
          <Stack.Screen
            name="ForgotPwd"
            component={ForgotPwd}
            options={() => {
              return {
                animation: 'slide_from_bottom',
              };
            }}
          />
          <Stack.Screen name="Reg" component={Registration} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen
            name="SelectMagicCoffee"
            component={SelectMagicCoffee}
            options={{headerTransparent: true}}
          />
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerTransparent: true, headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerTransparent: true}}
          />
          <Stack.Screen name="MyOrders" component={MyOrders} options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
