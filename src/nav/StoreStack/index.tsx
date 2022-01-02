import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreScreen, {IProduct} from '../../screen/StoreScreen';
import OrderOption from '../../screen/OrderOption';
import {TouchableOpacity, Image} from 'react-native';
import Barista from '../../screen/Barista';
import Country from '../../screen/Country';
import CoffeType from '../../screen/Coffee_Type';
import Additivies from '../../screen/Additivies';

export type StoreStackParamList = {
  Menu: undefined;
  OrderOption: {
    item: IProduct;
  };
  Barista: undefined;
  CoffeeCountry: undefined;
  CoffeeType: undefined;
  Additives: undefined;
};

const Stack = createNativeStackNavigator<StoreStackParamList>();

const StoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => {
        return {
          headerBackImageSource: require('../../assets/icons/back_icon.png'),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MyOrders');
                }}>
                <Image source={require('../../assets/icons/cart_icon.png')} />
              </TouchableOpacity>
            );
          },
        };
      }}>
      <Stack.Screen
        name="Menu"
        component={StoreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderOption"
        component={OrderOption}
        options={({navigation, route}) => {
          return {
            headerTitle: route.params.item.name,
            headerShadowVisible: false,
          };
        }}
      />
      <Stack.Screen
        name="Barista"
        component={Barista}
        options={{headerTitle: 'Конструктор заказа'}}
      />
      <Stack.Screen
        name="CoffeeCountry"
        component={Country}
        options={{headerTitle: 'Конструктор заказа'}}
      />
      <Stack.Screen
        name="CoffeeType"
        component={CoffeType}
        options={{headerTitle: 'Выберите страну'}}
      />
      <Stack.Screen
        name="Additives"
        component={Additivies}
        options={{headerTitle: 'Выберите добавку'}}
      />
    </Stack.Navigator>
  );
};

export default StoreStack;
