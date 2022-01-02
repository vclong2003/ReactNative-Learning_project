import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ItemStoreCoffee = ({title}) => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(238, 164, 206, 1)', 'rgba(197, 139, 242, 1)']} style={{borderRadius: 16}}>
    <TouchableOpacity style={styles.containerItem}>
      <Image source={require('../../assets/icons/store_icon.png')} />
      <Text style={styles.txtTitle}>{title}</Text>
      <Image source={require('../../assets/icons/more_icon.png')} />
    </TouchableOpacity>
    </LinearGradient>
  );
};
const SelectMagicCoffee = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'pink'}} />
      <View style={styles.containerList}>
        <Text style={styles.txtTitleHeader}>Выберите кофейню Magic Coffee</Text>
        <View style={styles.contentList}>
          <ItemStoreCoffee title={'ул. Тимирязева, 67 '} />
          <View style={{height: 7}} />
          <ItemStoreCoffee title={'ул. Кальварийская, 58 '} />
          <View style={{height: 7}} />
          <ItemStoreCoffee title={'ул. Мельникайте, 15 '} />
        </View>
      </View>
    </View>
  );
};

export default SelectMagicCoffee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {
    backgroundColor: '#324A59',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  txtTitleHeader: {
    alignSelf: 'center',
    marginVertical: 27,
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  contentList: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 21,
  },
  containerItem: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingLeft: 17,
    paddingBottom: 13,
    paddingRight: 13,
    borderRadius: 16,
    alignItems: 'center',
  },
  txtTitle: {
    flex: 1,
    marginLeft: 11,
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
