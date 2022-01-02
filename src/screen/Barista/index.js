import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemBarista from './itemBarista';

const data = [
  {
    id: '0',
    uri: require('../../assets/imgs/photo1.png'),
    name: 'Виктор',
    des: 'Топ-бариста',
    status: 1,
  },
  {
    id: '1',
    uri: require('../../assets/imgs/photo2.png'),
    name: 'Андрей',
    des: 'Топ-бариста',
    status: 1,
  },
  {
    id: '2',
    uri: require('../../assets/imgs/photo3.png'),
    name: 'Вера',
    des: 'Бариста',
    status: 0,
  },
];

const Barista = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 29,
        }}
        renderItem={({item, index}) => {
          return <ItemBarista item={item} navigation={navigation} />;
        }}
        ListHeaderComponent={() => {
          return (
            <Text
              style={{
                marginTop: 16,
                marginLeft: 5,
                color: 'black',
                fontSize: 18,
              }}>
              Выберите бариста
            </Text>
          );
        }}
      />
    </View>
  );
};

export default Barista;

const styles = StyleSheet.create({});
