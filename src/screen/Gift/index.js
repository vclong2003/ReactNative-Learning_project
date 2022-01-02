import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const widthImage = widthScreen - 50;
const height1 = (widthImage / 325) * 122;
const height2 = (widthImage / 325) * 108;

const Gift = () => {
  const renderCup = (value, maxValue) => {
    let view = [];
    for (let i = 1; i <= maxValue; i++) {
      let source =
        i <= value
          ? require('../../assets/icons/cup_active.png')
          : require('../../assets/icons/cup_inactive.png');
      view.push(<Image source={source} key={i} />);
    }
    return view;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 16,
                paddingBottom: 29,
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(244, 245, 247, 1)',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'rgba(50, 74, 89, 1)',
                    marginBottom: 5,
                  }}>
                  Американо
                </Text>
                <Text style={{fontSize: 10, color: 'rgba(50, 74, 89, 0.22)'}}>
                  24 июня | 12:30
                </Text>
              </View>
              <Text>+ 12 баллов</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        style={{backgroundColor: 'white'}}
        ListHeaderComponent={() => {
          return (
            <>
              <View style={styles.coffeeContainer}>
                <View style={styles.text}>
                  <Text style={{color: 'rgba(216, 216, 216, 1)'}}>
                    Карта лояльности
                  </Text>
                  <Text style={{color: 'rgba(216, 216, 216, 1)'}}>4 / 8</Text>
                </View>
                <View style={styles.renderCupContainer}>{renderCup(1, 8)}</View>
              </View>
              <View style={styles.pointContainer}>
                <View>
                  <Text style={{color: 'rgba(216, 216, 216, 1)'}}>
                    Мои баллы:
                  </Text>
                  <Text style={{color: 'rgba(216, 216, 216, 1)', fontSize: 24}}>
                    2750
                  </Text>
                </View>
                <TouchableOpacity style={styles.receivePointBtn}>
                  <Text style={{color: 'rgba(216, 216, 216, 1)'}}>
                    Оплатить баллами
                  </Text>
                </TouchableOpacity>
                <Image
                  source={require('../../assets/icons/coffee_bg.png')}
                  style={styles.bgIcon}
                />
              </View>
              <Text style={{marginTop: 31, marginBottom: 8}}>
                История начисления баллов
              </Text>
            </>
          );
        }}
      />
    </View>
  );
};

export default Gift;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 25, backgroundColor: 'white'},
  coffeeContainer: {
    width: widthImage,
    height: height1,
    backgroundColor: 'rgba(50, 74, 89, 1)',
    borderRadius: 12,
    marginBottom: 16,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 9,
  },
  renderCupContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  pointContainer: {
    flexDirection: 'row',
    width: widthImage,
    height: height2,
    backgroundColor: 'rgba(50, 74, 89, 1)',
    borderRadius: 16,
    paddingVertical: 25,
    paddingLeft: 30,
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  receivePointBtn: {
    borderRadius: 5,
    backgroundColor: 'rgba(162, 205, 233, 0.19)',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  bgIcon: {
    position: 'absolute',
    right: -10,
    bottom: -25,
  },
});
