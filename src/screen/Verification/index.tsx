import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';

const spacing = Platform.OS === 'android' ? 24 : 36;

const Code = ({value, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        width: 45,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
      }}
      onPress={onPress}>
      <Text style={{fontSize: 35}}>{value}</Text>
    </TouchableOpacity>
  );
};

const Verification = ({navigation}) => {
  const route = useRoute<RouteProp<RootStackParamList, 'Verification'>>();

  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const refTextInput = React.useRef(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const confirmOTP = React.useCallback(() => {
    route.params.confirmation.confirm(
      `${otp[0]}${otp[1]}${otp[2]}${otp[3]}${otp[4]}${otp[5]}`,
    );
  }, [otp]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: 56}}></View>
      <View style={{flex: 1}}>
        <View style={styles.containerTitle}>
          <Text style={styles.txtTitle}>Проверка</Text>
          <Text style={styles.txtDescription}>
            Введите код, который мы вам отправили
          </Text>
        </View>
      </View>
      <View style={styles.contentInput}>
        <View style={styles.codesContainer}>
          {otp.map((item, index) => {
            return (
              <Code
                value={item}
                key={index}
                onPress={() => {
                  refTextInput.current.focus();
                }}
              />
            );
          })}
        </View>
        <View style={styles.containerTime}>
          <Text style={styles.txtTime}>Выслать заново через 00:30</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            // navigation.navigate('SelectMagicCoffee');
            confirmOTP();
          }}>
          <Image source={require('../../assets/icons/next_icon.png')} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={{width: 0, height: 0}}
        keyboardType="number-pad"
        maxLength={6}
        ref={refTextInput}
        onChangeText={text => {
          setOtp(() => {
            return [
              text[0] || '',
              text[1] || '',
              text[2] || '',
              text[3] || '',
              text[4] || '',
              text[5] || '',
            ];
          });
        }}
        value={`${otp[0]}${otp[1]}${otp[2]}${otp[3]}${otp[4]}${otp[5]}`}
      />
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  btnNext: {
    width: 64,
    height: 64,
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
    flex: 1,
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
  codesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTime: {
    flex: 1,
    justifyContent: 'center',
  },
  txtTime: {
    color: 'rgba(170, 170, 170, 0.5)',
    fontSize: 15,
    alignSelf: 'center',
  },
});
