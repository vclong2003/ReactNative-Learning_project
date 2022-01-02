import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ItemAdditivies from './ItemAdditivies';

const data = [
  {id: '0', title: 'Цейлонская корица'},
  {id: '1', title: 'Тертый шоколад'},
  {id: '2', title: 'Жидкий шоколад'},
  {id: '3', title: 'Маршмеллоу'},
  {id: '4', title: 'Взбитые сливки'},
  {id: '5', title: 'Сливки'},
  {id: '6', title: 'Мускатный орех'},
  {id: '7', title: 'Мороженное'},
];

const Additivies = ({navigation}) => {
  const [arrayIndexSelect, setArrayIndexSelect] = React.useState([0, 3]);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => {
          return (
            <ItemAdditivies
              item={item}
              isSelect={arrayIndexSelect.findIndex(e => e === index) !== -1}
              index={index}
              setArrayIndexSelect={setArrayIndexSelect}
              arrayIndexSelect={arrayIndexSelect}
            />
          );
        }}
        ListHeaderComponent={() => {
          return <Text style={styles.txtTitle}>Выберите сорт кофе</Text>;
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.goBack();
        }}
        >
        <Text style={{color: 'white'}}>Далее</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Additivies;

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
  btn: {
    backgroundColor: 'rgba(50, 74, 89, 1)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    marginHorizontal: 30,
  },
});
