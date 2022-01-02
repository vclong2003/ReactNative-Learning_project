import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../../Components/input';

const spacing = Platform.OS === 'android' ? 24 : 36;

const ForgotPwd = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: 'white'}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View style={{height: 56}}></View>
      <View style={{flex: 1}}>
        <View style={styles.containerTitle}>
          <Text style={styles.txtTitle}>Забыли пароль?</Text>
          <Text style={styles.txtDescription}>
            Введите адрес электронной почты
          </Text>
        </View>
      </View>
      <View style={{height: '5%'}} />
      <View style={styles.contentInput}>
        <Input
          placeholder="Адрес электронной почты"
          source={require('../../assets/icons/message_icon.png')}
          secureTextEntry={false}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <TouchableOpacity style={styles.btnNext}>
          <Image source={require('../../assets/icons/next_icon.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}></View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPwd;

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
  },
  container: {
    flex: 1,
    backgroundColor: '',
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
    marginTop: 16,
  },
  contentInput: {
    flex: 1,
    paddingLeft: 48,
    paddingRight: 41,
  },
  contentButton: {
    flex: 1,
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
