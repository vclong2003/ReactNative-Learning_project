import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Input from '../../Components/input';
const Authorization = ({navigation}) => {

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View style={{height: '8%'}} />
      <View style={styles.containerTitle}>
        <Text style={styles.txtTitle}>Войти</Text>
        <Text style={styles.txtDescription}>Добро пожаловать</Text>
      </View>
      <View style={{height: '5%'}} />
      <View style={styles.contentInput}>
        <Input
          placeholder="Адрес электронной почты "
          source={require('../../assets/icons/message_icon.png')}
        />
        <View style={{height: 36}} />
        <Input
          placeholder="Пароль"
          source={require('../../assets/icons/Lock_icon.png')}
          secureTextEntry={true}
        />
        <Text
          style={{
            color: 'rgba(50, 74, 89, 1)',
            alignSelf: 'center',
            marginTop: 25,
          }}
          onPress={() => {
            navigation.navigate('ForgotPwd');
          }}>
          Забыли пароль?
        </Text>
      </View>
      <View style={styles.contentButton}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            navigation.navigate('MainTab');
          }}>
          <Image source={require('../../assets/icons/next_icon.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.txtFooter}>
          Впервые?{' '}
          <Text
            style={{color: '#324A59'}}
            onPress={() => {
              navigation.navigate('Reg');
            }}>
            Зарегистрироваться.
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Authorization;

const styles = StyleSheet.create({
  btnNext: {
    width: 58,
    height: 58,
    borderRadius: 32,
    backgroundColor: '#324A59',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 41,
    marginVertical: '2%',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 48,
  },
  txtTitle: {
    fontWeight: '500',
    fontSize: 22,
    color: '#181D2D',
  },
  txtDescription: {
    fontWeight: '500',
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 15,
  },
  contentInput: {
    flex: 2,
    paddingLeft: 48,
    paddingRight: 41,
  },
  contentButton: {
    flex: 2,
  },
  containerFooter: {
    flex: 1,
  },
  txtFooter: {
    fontSize: 14,
    color: '#AAAAAA',
    marginLeft: 48,
  },
});
