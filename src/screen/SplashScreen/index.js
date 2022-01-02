import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={require('../../assets/imgs/splash_background.png')}>
        <View style={styles.shadow} />
        <Image
          source={require('../../assets/imgs/splash_logo.png')}
          style={styles.imgLogo}
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    width: width,
    height: height,
  },
  shadow: {
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: 'rgba(29, 35, 53, 0.37)',
  },
  imgLogo: {
    alignSelf: 'center',
  },
});
