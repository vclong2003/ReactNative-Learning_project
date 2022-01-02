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
import auth from '@react-native-firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

const spacing = Platform.OS === 'android' ? 24 : 36;

const Registration = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [userInfo, setUserInfo] = React.useState({
    userName: '',
    phoneNumber: '+84 888827768',
    email: '',
    password: '',
  });

  const onPressOTP = React.useCallback(async () => {
    if (!userInfo.phoneNumber) return;
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        userInfo.phoneNumber,
      );
      navigation.navigate('Verification', {confirmation});
    } catch (error) {
      console.log('error:', error);
    }
  }, [userInfo.phoneNumber]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <View style={styles.containerTitle}>
          <Text style={styles.txtTitle}>Зарегистрироваться</Text>
          <Text style={styles.txtDescription}>Создать аккаунт здесь</Text>
        </View>
      </View>
      <View style={{height: '5%'}} />
      <View style={styles.contentInput}>
        <Input
          placeholder="Имя пользователя"
          source={require('../../assets/icons/man_icon.png')}
        />
        <View style={{height: '6%'}} />
        <Input
          placeholder="Номер мобильного телефона"
          source={require('../../assets/icons/smf_icon.png')}
          secureTextEntry={false}
          value={userInfo.phoneNumber}
          onChangeText={phoneNumber => {
            setUserInfo({
              ...userInfo,
              phoneNumber,
            });
          }}
          keyboardType="number-pad"
        />
        <View style={{height: '6%'}} />
        <Input
          placeholder="Адрес электронной почты"
          source={require('../../assets/icons/message_icon.png')}
          secureTextEntry={false}
        />
        <View style={{height: '6%'}} />
        <Input
          placeholder="Пароль"
          source={require('../../assets/icons/Lock_icon.png')}
          secureTextEntry={true}
        />
        <Text
          style={{
            fontSize: 12,
            color: 'rgba(50, 74, 89, 1)',
            marginTop: '4%',
          }}>
          Регистрируясь, вы соглашаетесь с нашими условиями использования
        </Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.btnNext} onPress={onPressOTP}>
          <Image source={require('../../assets/icons/next_icon.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.txtFooter}>
          Уже зарегистрировались?{' '}
          <Text
            style={{color: '#324A59'}}
            onPress={() => {
              Alert.alert('Thông báo', 'OnPress Text ');
            }}>
            Войти.
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registration;

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
    marginTop: 16,
  },
  contentInput: {
    flex: 3,
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
