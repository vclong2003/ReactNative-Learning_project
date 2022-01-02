import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { OrderOptionContext } from '.';

const ItemType = ({value, name}) => {
  const {objCoffee, setObjCoffee} = React.useContext(OrderOptionContext);
  const _onPress = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        type: value,
      };
      return newValue;
    });
  }, [value]);
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          borderColor: objCoffee.type === value ? '#324A59' : '#D8D8D866',
        },
      ]}
      onPress={_onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const OptionType = React.memo(() => {
  const {initValue} = React.useContext(OrderOptionContext);
  return (
    <View style={styles.container}>
      {initValue.types.map(item => {
        return (
          <ItemType
            name={item.name}
            value={item.value}
            key={item.value}
          />
        );
      })}
    </View>
  );
});

export default OptionType;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(216, 216, 216, 0.4)',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
});
