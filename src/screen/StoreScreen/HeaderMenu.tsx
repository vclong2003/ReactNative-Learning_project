import React from 'react';
import {Header} from '@react-navigation/elements';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {RootStackParamList} from '../../../App';

const HeaderMenu = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Header
      title={''}
      headerLeft={() => {
        return (
          <View style={{marginLeft: 26}}>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 2,
                color: 'rgba(216, 216, 216, 1)',
              }}>
              Добро пожаловать!
            </Text>
            <Text style={{fontSize: 18, color: 'rgba(0, 24, 51, 1)'}}>
              Алексей
            </Text>
          </View>
        );
      }}
      headerRight={() => {
        return (
          <View style={{flexDirection: 'row', marginRight: 30}}>
            <TouchableOpacity>
              <Image source={require('../../assets/icons/cart_icon.png')} />
            </TouchableOpacity>
            <View style={{width: 30}} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image source={require('../../assets/icons/profile_icon.png')} />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default HeaderMenu;
