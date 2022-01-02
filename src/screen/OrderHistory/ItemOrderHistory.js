import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemOrderHistory = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.txtTime}>{item.time}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../assets/icons/order_cup.png')} />
          <Text style={styles.txtDes}>{item.cup}</Text>
        </View>
        <View style={{height: 9}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../assets/icons/location.png')} />
          <Text style={styles.txtDes}>{item.location}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.txtPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Заказать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemOrderHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingTop: 23,
    paddingBottom: 10,
    borderBottomColor: 'rgba(244, 245, 247, 1)',
  },
  txtTime: {
    marginBottom: 10,
    color: 'rgba(50, 74, 89, 0.22)',
    fontSize: 10,
  },
  txtDes: {
    fontSize: 14,
    marginLeft: 10,
    color: 'rgba(50, 74, 89, 1)',
  },
  txtPrice: {
    fontSize: 15,
    color: 'rgba(50, 74, 89, 0.6)',
    fontWeight: '600',
    marginBottom: 5,
    alignSelf: 'center',
  },
  btn: {
    paddingHorizontal: 16,
    borderRadius: 50,
    backgroundColor: 'rgba(50, 74, 89, 1)',
    height: 32,
    justifyContent: 'center',
  },
  txtBtn: {
    fontSize: 12,
    color: 'white',
  },
});
