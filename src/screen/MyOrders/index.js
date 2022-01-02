import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Item from './Item';
import Popup from './popup';

const data = [
  {
    id: 0,
    name: 'Американо',
    uri: require('../../assets/imgs/coffee_2.png'),
    description: 'single | iced | medium | full ice',
    quantity: '1',
    price: '3.00',
  },
  {
    id: 1,
    name: 'Капучино',
    uri: require('../../assets/imgs/coffee_1.png'),
    description: 'single | iced | medium | full ice',
    quantity: '1',
    price: '3.00',
  },
  {
    id: 2,
    name: 'Флэт Уайт',
    uri: require('../../assets/imgs/coffee_3.png'),
    description: 'single | iced | medium | full ice',
    quantity: '1',
    price: '3.00',
  },
];

const MyOrders = () => {
  const refPopup = React.useRef();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => {
          return <Item item={item} />;
        }}
        ListHeaderComponent={() => {
          return <Text style={styles.title}>Мой заказ</Text>;
        }}
      />
      <View style={styles.payContainer}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.priceDes}>Итоговая сумма</Text>
          <Text style={styles.price}>BYN 9.00</Text>
        </View>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => {
            refPopup.current?.open();
          }}>
          <Image
            source={require('../../assets/icons/cart_icon.png')}
            style={{tintColor: 'white', marginHorizontal: 8}}
          />
          <Text style={{fontSize: 16, color: 'white', marginHorizontal: 8}}>
            Далее
          </Text>
        </TouchableOpacity>
      </View>
      <Popup ref={refPopup} />
    </View>
  );
};

export default MyOrders;

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
    fontSize: 14,
  },
  price: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 20,
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
    height: '30%',
  },
  payingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    height: '70%',
    width: '100%',
    flexDirection: 'column',
    padding: 30,
  },
  paymentTitle: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 20,
    marginBottom: 25,
  },
  cartLogoContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(247, 248, 251, 1)',
    borderRadius: 12,
    marginRight: 16,
  },
  paymentReminder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paymentReminder1: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 15,
  },
  paymentReminder2: {
    color: 'rgba(0, 24, 51, 1)',
    fontSize: 15,
    fontWeight: '500',
  },
});
