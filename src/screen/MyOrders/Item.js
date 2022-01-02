import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Item = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.uri} style={{width: 82, height: 61}} />
      <View style={{flexDirection: 'column', marginLeft: 12, marginRight: 16}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.quantity}>x{item.quantity}</Text>
      </View>
      <Text style={styles.price}>
        BYN{'\n'}
        {item.price}
      </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(247, 248, 251, 1)',
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 12,
    marginVertical: 10,
  },
  name: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 13,
  },
  description: {
    color: 'rgba(117, 117, 117, 1)',
    fontSize: 10,
  },
  quantity: {
    color: 'rgba(0, 0, 0, 0.57)',
    fontSize: 10,
  },
  price: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 16,
    fontWeight: '500',
  },
});
