import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const PaymentMethod = ({name, uri, prevUsed}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/unselectedDot.png')} />
      <View style={{flexDirection: 'column', marginLeft: 15, flex: 1}}>
        <Text style={{color: 'rgba(0, 24, 51, 1)', fontSize: 14}}>{name}</Text>
        <Text style={{color: 'rgba(0, 24, 51, 0.22)', fontSize: 10}}>
          {prevUsed}
        </Text>
      </View>
      <Image source={uri} />
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(247, 248, 251, 1)',
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
  },
});
