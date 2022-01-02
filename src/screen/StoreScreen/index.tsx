import React from 'react';
import {Header} from '@react-navigation/elements';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageSourcePropType,
  ActivityIndicator,
} from 'react-native';
import HeaderMenu from './HeaderMenu';
import ItemMenu from './itemMenu';

const widthScreen = Dimensions.get('window').width;
const spacing = 18;
const widthItem = (widthScreen - spacing * 2) / 2;

export interface IProduct {
  id: string;
  name: string;
  uri: ImageSourcePropType;
}

const _data: IProduct[] = [
  {
    id: '0',
    name: 'Американо',
    uri: require('../../assets/imgs/coffee_2.png'),
  },
  {
    id: '1',
    name: 'Капучино',
    uri: require('../../assets/imgs/coffee_1.png'),
  },
  {
    id: '2',
    name: 'Латте',
    uri: require('../../assets/imgs/coffee_4.png'),
  },
  {
    id: '3',
    name: 'Флэт Уайт',
    uri: require('../../assets/imgs/coffee_3.png'),
  },
  {
    id: '4',
    name: 'Раф',
    uri: require('../../assets/imgs/coffee_5.png'),
  },
  {
    id: '5',
    name: 'Эспрессо',
    uri: require('../../assets/imgs/coffee_6.png'),
  },
];

const StoreScreen = () => {
  const [data, setData] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const getData = React.useCallback(() => {
    setTimeout(() => {
      setData(_data);
      setLoading(false);
    }, 300);
  }, []);

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <HeaderMenu />
      {loading ? (
        <View
          style={[
            styles.content,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <ActivityIndicator color={'white'} size={'large'} />
        </View>
      ) : (
        <View style={styles.content}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return <ItemMenu item={item} index={index} />;
            }}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{
              paddingHorizontal: 18,
            }}
            numColumns={2}
            ListHeaderComponent={() => {
              return (
                <Text style={styles.txtHeaderList}>Выберите Ваш кофе</Text>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'rgba(50, 74, 89, 1)',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 7,
  },
  txtHeaderList: {
    fontSize: 16,
    color: 'rgba(216, 216, 216, 1)',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 24,
  },
});
