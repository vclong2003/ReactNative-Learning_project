import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ButtonProperty = ({title}) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(238, 164, 206, 1)', 'rgba(197, 139, 242, 1)']}
      style={{borderRadius: 16}}>
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => {
          navigation.navigate('Barista');
        }}>
        <Image source={require('../../assets/icons/tweak.png')} />
        <Text style={styles.txtTitle}>{title}</Text>
        <Image source={require('../../assets/icons/more_icon.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ButtonProperty;

const styles = StyleSheet.create({
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
