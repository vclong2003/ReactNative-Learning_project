import {transform} from '@babel/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import PaymentMethod from './PaymentMethod';

const height = Dimensions.get('window').height;

const Popup = React.forwardRef((props, ref) => {
  const transY = React.useRef(new Animated.Value(height)).current;
  const [visible, setVisible] = React.useState(false);
  const paymentMedthods = React.useMemo(() => {
    return [
      {
        id: 0,
        name: 'Оплата онлайн',
        prevUsed: 'Assist Belarus',
        uri: require('../../assets/imgs/paymentMedthod1.png'),
      },
      {
        id: 1,
        name: 'Банковская карта',
        prevUsed: '2540 xxxx xxxx 2648',
        uri: require('../../assets/imgs/paymentMedthod2.png'),
      },
    ];
  }, []);

  const open = React.useCallback(() => {
    setVisible(true);
    let aniTransY = Animated.timing(transY, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    });
    aniTransY.start();
  }, []);

  const close = React.useCallback(() => {
    let aniTransY = Animated.timing(transY, {
      toValue: height,
      duration: 400,
      useNativeDriver: true,
    });
    aniTransY.start(({finished}) => {
      if (finished) {
        setVisible(false);
      }
    });
  }, []);

  React.useImperativeHandle(ref, () => {
    return {
      setVisible,
      open,
      close,
    };
  });

  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <View style={styles.popupContainer}>
        <TouchableOpacity
          style={styles.btnClosePopup}
          onPress={() => {
            close();
          }}
        />
        <Animated.View
          style={[styles.payingContainer, {transform: [{translateY: transY}]}]}>
          <Text style={styles.paymentTitle}>Оплата заказа</Text>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={styles.cartLogoContainer}>
              <Image source={require('../../assets/icons/cart_icon.png')} />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: 'rgba(0, 24, 51, 1)', fontSize: 14}}>
                Алексей
              </Text>
              <Text style={{color: 'rgba(0, 24, 51, 1)', fontSize: 10}}>
                кофейня Magic Coffee{'\n'}г. Минск, ул. Тимирязева, 67
              </Text>
            </View>
          </View>
          {paymentMedthods.map(item => {
            return (
              <PaymentMethod
                name={item.name}
                prevUsed={item.prevUsed}
                uri={item.uri}
                key={item.id}
              />
            );
          })}
          <View style={styles.paymentReminder}>
            <Text style={styles.paymentReminder1}>Сумма</Text>
            <Text style={styles.paymentReminder2}>BYN 9.00</Text>
          </View>
          <View style={styles.payContainer1}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.priceDes}>Итоговая сумма</Text>
              <Text style={styles.price}>BYN 9.00</Text>
            </View>
            <TouchableOpacity
              style={styles.payButton}
              onPress={() => {
                setVisible(true);
              }}>
              <Image
                source={require('../../assets/icons/card.png')}
                style={{tintColor: 'white', marginHorizontal: 8}}
              />
              <Text style={{fontSize: 14, color: 'white', marginHorizontal: 8}}>
                Оплатить{'\n'}
                сейчас
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
});

export default Popup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 24,
    marginBottom: 10,
  },
  payContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  payContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
  },
  priceDes: {
    color: 'rgba(0, 24, 51, 0.22)',
    fontSize: 12,
  },
  price: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 18,
    fontWeight: '600',
  },
  payButton: {
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: 'rgba(50, 74, 89, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(29, 35, 53, 0.51)',
  },
  btnClosePopup: {
    width: '100%',
    height: '20%',
  },
  payingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    height: '80%',
    width: '100%',
    flexDirection: 'column',
    padding: 30,
  },
  paymentTitle: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 18,
    marginBottom: 10,
  },
  cartLogoContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(247, 248, 251, 1)',
    borderRadius: 12,
    marginRight: 16,
  },
  paymentReminder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  paymentReminder1: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 12,
  },
  paymentReminder2: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 12,
    fontWeight: '600',
  },
});
