import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ItemCountry from './ItemCountry';

const data = [
  {id: '0', title: 'Бразилия'},
  {id: '1', title: 'Колумбия'},
  {id: '2', title: 'Коста-рика'},
  {id: '3', title: 'Ямайка'},
  {id: '4', title: 'Йемен'},
  {id: '5', title: 'Кения'},
  {id: '6', title: 'Индия'},
  {id: '7', title: 'Танзания'},
  {id: '8', title: 'Гавайия'},
  {id: '9', title: 'Индонейзия'},
  {id: '10', title: 'Эфиопия'},
];

const Country = ({navigation}) => {
  const [indexSelect, setIndexSelect] = React.useState(0);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => {
          return (
            <ItemCountry
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
            <Text style={styles.txtTitle}>Выберите страну и сорт кофе</Text>
          );
        }}
      />
    </View>
  );
};

export default Country;

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
