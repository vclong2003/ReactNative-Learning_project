import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageSourcePropType,
  Animated,
} from 'react-native';
import {Text} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../App';
import ButtonNext from './ButtonNext';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Propspage {
  title: string;
  description: string;
  source: ImageSourcePropType;
}

const Page = ({title, description, source}: Propspage) => {
  const startAnimation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const aniStartAnimation = Animated.timing(startAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    });
    aniStartAnimation.start();
  }, []);

  // React.useEffect(() => {
  //   const loopAnimation = Animated.loop(
  //     Animated.spring(scaleValue, {
  //       toValue: 1,
  //       useNativeDriver: true,
  //       speed: 10,
  //     }),
  //     {iterations: 2},
  //   ).start();
  //   Animated.timing(opacityValue, {
  //     toValue: 1,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // });
  return (
    <View style={styles.page}>
      <View style={styles.containerImg}>
        <Animated.Image
          source={source}
          style={{
            width: '100%',
            height: '100%',
            marginTop: '20%',
            opacity: startAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
            transform: [
              {
                scale: startAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 96,
        }}>
        <Animated.Text
          style={[
            styles.txtTitle,
            {
              opacity: startAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}>
          {title}
        </Animated.Text>
        <Text r18 textColor marginT-12>
          {description}
        </Text>
      </View>
    </View>
  );
};

const AniTouch = Animated.createAnimatedComponent(TouchableOpacity);

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const transx = React.useRef(new Animated.Value(-100)).current;
  let value = 0;
  const aniTransx = Animated.spring(transx, {
    toValue: 0,
    useNativeDriver: true,
  });
  aniTransx.start();

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="black" />
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <Page
          title={'Почувствуй себя\nбариста!'}
          description={'Волшебный кофе под заказ.'}
          source={require('../../assets/imgs/splash_logo.png')}
        />
        <Page
          title={'Почувствуй себя\nбариста! 2'}
          description={'Волшебный кофе под заказ.'}
          source={require('../../assets/imgs/splash_logo.png')}
        />
        <Page
          title={'Почувствуй себя\nбариста! 3'}
          description={'Волшебный кофе под заказ.'}
          source={require('../../assets/imgs/splash_logo.png')}
        />
      </ScrollView>

      <ButtonNext />

      <View style={styles.dotContainer}>
        <View style={styles.activeDot} />
        <View style={styles.inactiveDot} />
        <View style={styles.inactiveDot} />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  page: {
    width: width,
    height: height,
  },
  containerImg: {
    width: width,
    flexDirection: 'column',
    height: '50%',
    backgroundColor: 'rgba(50, 74, 89, 1)',
    alignItems: 'center',
    overflow: 'hidden',
  },
  txtTitle: {
    fontSize: 28,
    color: 'rgba(24, 29, 45, 1)',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  txtDescription: {
    fontSize: 18,
    color: 'rgba(170, 170, 170, 1)',
    alignSelf: 'center',
    textAlign: 'center',
  },
  btnNext: {
    width: 58,
    height: 58,
    borderRadius: 32,
    backgroundColor: 'rgba(50, 74, 89, 1)',
    position: 'absolute',
    right: 25,
    bottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    height: 10,
    position: 'absolute',
    top: '53%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(50, 74, 89, 0.2)',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 30,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(50, 74, 89, 1)',
    marginHorizontal: 4,
  },
});
