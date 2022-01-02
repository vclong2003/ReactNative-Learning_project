import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {OrderOptionContext, EAttribute, IOrderOptionContext} from '.';

interface PropsItem {
  uri?: ImageSourcePropType;
  value: number;
}

const ItemAttribute = ({uri, value}: PropsItem) => {
  const {objCoffee, setObjCoffee} = React.useContext(OrderOptionContext);
  const _onPress = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        attribute: value,
      };
      return newValue;
    });
  }, [value]);
  return (
    <TouchableOpacity style={styles.btn} onPress={_onPress}>
      {!!uri && (<Image
        source={uri}
        style={{
          tintColor: value === objCoffee.attribute ? '#000000' : '#D8D8D8',
        }}
      />)}
    </TouchableOpacity>
  );
};

const OptionThermal = () => {
  const orderContext =
    React.useContext<IOrderOptionContext>(OrderOptionContext);
  return (
    <View style={styles.container}>
      {orderContext?.initValue?.attributes?.map(item => {
        return (
          <ItemAttribute value={item.value} uri={item.uri} key={item.value} />
        );
      })}
    </View>
  );
};

export default OptionThermal;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  btn: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    marginHorizontal: 3,
  },
});
