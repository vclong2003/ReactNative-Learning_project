import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { OrderOptionContext } from '.';

const ItemOptionVolume = ({value, name, uri}) => {
  const {objCoffee, setObjCoffee} = React.useContext(OrderOptionContext);
  const _onPress = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        volume: value,
      };
      return newValue;
    });
  }, [value]);
  return (
    <TouchableOpacity style={styles.btn} onPress={_onPress}>
      <Text style={styles.num}>{name}</Text>
      <Image
        source={uri}
        style={{tintColor: value === objCoffee.volume ? '#000000' : '#D8D8D8'}}
      />
    </TouchableOpacity>
  );
};

const OptionVolume = ({volume, setObjCoffee, initVolumes}) => {
  return (
    <View style={styles.container}>
      {initVolumes.map(item => {
        return (
          <ItemOptionVolume
            volume={volume}
            setObjCoffee={setObjCoffee}
            name={item.name}
            uri={item.uri}
            value={item.value}
            key={item.value}
          />
        );
      })}
    </View>
  );
};

export default OptionVolume;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  btn: {
    marginTop: 18,
    width: 34,
    height: 34,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  num: {
    fontSize: 10,
    marginBottom: 5,
    color: 'black',
  },
});
