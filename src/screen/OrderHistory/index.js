import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemOrderHistory from './ItemOrderHistory';

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

const OrderHistory = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <ItemOrderHistory item={item} />;
        }}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
      />
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({});
