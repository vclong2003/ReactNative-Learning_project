import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import ItemType from './ItemType';

const data = [
  {id: '0', title: 'Сантос'},
  {id: '1', title: 'Бурбон Сантос'},
  {id: '2', title: 'Минас'},
  {id: '3', title: 'Рио'},
  {id: '4', title: 'Канилон'},
  {id: '5', title: 'Флэт-бит'},
];

const CoffeType = ({navigation}) => {
    const [indexSelect, setIndexSelect] = React.useState(0);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => {
          return (
            <ItemType
              item={item}
              navigation={navigation}
              isSelect={index === indexSelect}
              index={index}
              setIndexSelect={setIndexSelect}
            />
          );
        }}
        ListHeaderComponent={() => {
          return (
            <Text style={styles.txtTitle}>Выберите сорт кофе</Text>
          );
        }}
      />
    </View>
  );
};

export default CoffeType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txtTitle: {
    marginTop: 16,
    marginBottom: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});
