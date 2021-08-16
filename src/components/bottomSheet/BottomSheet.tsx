import React, { useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { Box } from '../../themes/Box';
import { Text } from '../../themes/text/Text';
import { Button } from '../button/Button';

export const BottomSheet = ({ isVisible }) => {
  const animationValue = new Animated.Value(0);
  const [animation] = useState(animationValue);

  console.log(animation);

  const screenHeight = Dimensions.get('window').height;

  const backdrop = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [screenHeight, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0.01, 0.5],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  const handleOnOpen = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    console.log(animation);
  };

  const handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0.01, 1],
          outputRange: [0, -1 * screenHeight],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const style = {
    backgroundColor: 'red',
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minHeight: 80,
    alignItems: 'center',
  };
  return (
    <>
      <Button title="OPEN" onPress={() => handleOnOpen()} />
      <Box position="absolute" bottom={0} right={0} left={0}>
        <Animated.View style={[style, slideUp, backdrop]}>
          <Box justifyContent="flex-end" flex={1} backgroundColor="primary">
            <Text variant="h1">HI THERE</Text>
            <Button title="CLOSE" onPress={() => handleClose()} />
          </Box>
        </Animated.View>
      </Box>
    </>
  );
};
