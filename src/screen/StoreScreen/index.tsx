import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageSourcePropType,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../App';
import api from '../../api';
import {StoreStackParamList} from '../../nav/StoreStack';
import HeaderMenu from './HeaderMenu';
import ItemMenu from './itemMenu';

const widthScreen = Dimensions.get('window').width;
const spacing = 18;
const widthItem = (widthScreen - spacing * 2) / 2;

export interface IProduct {
  id: string;
  name: string;
  avatar: string;
}

const StoreScreen = () => {
  const navigation = useNavigation<NavigationProp<StoreStackParamList>>();
  const [data, setData] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const getData = React.useCallback(async () => {
    try {
      const res = await fetch(api.getProduct, {
        method: 'GET',
        headers: {
          token: 'erjhjweggcuyegjysyeryvcyrvjahbcj1274567325',
        },
      });
      const resToJson = await res.json();
      console.log('resToJson', resToJson);

      setData(resToJson);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
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
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 10,
          bottom: 10,
        }}
        onPress={() => {
          navigation.navigate('CreateProduct');
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#FFF',
          }}>
          +
        </Text>
      </TouchableOpacity>
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
