import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemBarista = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      navigation.navigate('CoffeeCountry');
    }}>
      <Image source={item.uri} />
      <View style={styles.content}>
        <Text style={styles.txtName}>{item.name}</Text>
        <Text style={styles.txtDes}>{item.des}</Text>
      </View>
      <View style={styles.containerDot}>
        <View
          style={[
            styles.dot,
            {
              backgroundColor: !!item.status ? 'green' : 'red',
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemBarista;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 8,
    paddingRight: 32,
    borderRadius: 22,
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 22,
    elevation: 3,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'center',
    marginLeft: 16,
    flex: 1,
  },
  txtName: {
    fontSize: 15,
    color: 'rgba(9, 5, 28, 1)',
    marginBottom: 8,
  },
  txtDes: {
    fontSize: 16,
    color: 'rgba(59, 59, 59, 0.3)',
  },
  containerDot: {
    width: 16,
    justifyContent: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});
