import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ItemAdditivies = ({
  item,
  isSelect,
  index,
  arrayIndexSelect,
  setArrayIndexSelect,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        let indexInArray = arrayIndexSelect.findIndex(e => e === index);
        if (indexInArray === -1) {
          setArrayIndexSelect([...arrayIndexSelect, index]);
        } else {
          arrayIndexSelect.splice(indexInArray, 1);
          setArrayIndexSelect([...arrayIndexSelect]);
        }
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
      {!!isSelect && <Image source={require('../../assets/icons/tick.png')} />}
    </TouchableOpacity>
  );
};

export default ItemAdditivies;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 11,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(198, 198, 200, 1)',
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'center',
  },
});
