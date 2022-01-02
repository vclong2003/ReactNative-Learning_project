import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import {IProduct} from '.';
import {StoreStackParamList} from '../../nav/StoreStack';

const widthScreen = Dimensions.get('window').width;
const spacing = 18;
const widthItem = (widthScreen - spacing * 2) / 2;
const heightItem = (widthItem / 154) * 164;

interface Props {
  item: IProduct;
  index: number;
}

const ItemMenu = ({item, index}: Props) => {
  const navigation = useNavigation<NavigationProp<StoreStackParamList>>();
  const opacity = React.useRef(new Animated.Value(0)).current;
  const transY = React.useRef(new Animated.Value(30)).current;
  React.useEffect(() => {
    const aniOpacity = Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
      delay: parseInt(`${index / 2}`) * 100,
    });
    const aniTransy = Animated.timing(transY, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
      delay: parseInt(`${index / 2}`) * 100,
    });
    Animated.parallel([aniOpacity, aniTransy]).start();
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [{translateY: transY}],
        },
      ]}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          navigation.navigate('OrderOption', {
            item: item,
          });
        }}>
        <Image source={item.uri} style={{marginBottom: 12}} />
        <Text style={styles.txtName}> {item.name} </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({
  container: {
    height: heightItem,
    borderRadius: 20,
    paddingHorizontal: 8,
    width: widthItem,
    marginBottom: 16,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
    fontSize: 14,
    color: 'rgba(50, 74, 89, 1)',
  },
});
