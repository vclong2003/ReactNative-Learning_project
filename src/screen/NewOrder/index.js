import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemNewOrder from './ItemNewOrder';

const data = [
  {
    id: '0',
    time: '24 June | 12:30 PM',
    cup: 'Американо',
    location: 'г. Минск, ул. Тимирязева, 67',
    price: 'BYN 3.00',
  },
  {
    id: '1',
    time: '24 June | 12:30 PM',
    cup: 'Мокко',
    location: 'г. Минск, ул. Тимирязева, 67',
    price: 'BYN 3.00',
  },
];

const NewOrder = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <ItemNewOrder item={item} />;
        }}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
      />
    </View>
  );
};

export default NewOrder;

const styles = StyleSheet.create({});
