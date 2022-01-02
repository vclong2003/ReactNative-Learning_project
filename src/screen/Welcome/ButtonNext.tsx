import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {RootStackParamList} from '../../../App';
import {PanGestureHandler} from 'react-native-gesture-handler';

const ButtonNext = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const transx = useSharedValue(0);
  const transy = useSharedValue(0);
  const aniStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: transx.value,
        },
        {
          translateY: transy.value,
        },
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = transx.value;
      ctx.startY = transy.value;
    },
    onActive: (event, ctx) => {
      transx.value = ctx.startX + event.translationX;
      transy.value = ctx.startY + event.translationY;
    },
    onEnd: _ => {
      transx.value = withSpring(0);
      transy.value = withSpring(0);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={aniStyle}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            navigation.navigate('Auth');
          }}>
          <Image source={require('../../assets/icons/next_icon.png')} />
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ButtonNext;

const styles = StyleSheet.create({
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
});
