import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { OrderOptionContext } from '.';

const OptionQuantity = () => {
  const {objCoffee, setObjCoffee} = React.useContext(OrderOptionContext);
  const minus = React.useCallback(() => {
    if (objCoffee.quantity <= 1) return;
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        quantity: prevValue.quantity - 1,
      };
      return newValue;
    });
  }, [objCoffee.quantity]);
  const plus = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        quantity: prevValue.quantity + 1,
      };
      return newValue;
    });
  }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(216, 216, 216, 0.4)',
        borderRadius: 50,
        paddingVertical: 4,
        paddingHorizontal: 16,
      }}>
      <TouchableOpacity onPress={minus}>
        <Text>-</Text>
      </TouchableOpacity>
      <View style={{width: 50, alignItems: 'center'}}>
        <Text>{objCoffee.quantity}</Text>
      </View>
      <TouchableOpacity onPress={plus}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionQuantity;

const styles = StyleSheet.create({});
