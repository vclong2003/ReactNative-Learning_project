import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemCountry = ({item, navigation, isSelect, index, setIndexSelect}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('CoffeeType');
        setIndexSelect(index);
      }}>
      <View style={styles.containerLeft}>
        <Text
          style={{
            color: isSelect ? 'rgba(10, 132, 255, 1)' : 'black',
            fontSize: 17,
          }}>
          {item.title}
        </Text>
      </View>
      <Image source={require('../../assets/icons/rightArrowShort.png')} />
    </TouchableOpacity>
  );
};

export default ItemCountry;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(198, 198, 200, 1)',
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'center',
  },
});
