import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Animated, Dimensions } from 'react-native';
import { Box } from '../../themes/Box';
import { Button } from '../../components/button/Button';
import { AnimatedBox } from '../../themes/animatedBox/AnimatedBox';

type BottomSheetType = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const SystemBottomSheet: React.FC<BottomSheetType> = ({
  isVisible,
  onClose,
  children,
}) => {
  const animatedValue = new Animated.Value(isVisible ? 1 : 0);
  const screenHeight = Dimensions.get('window').height;
  const [animation] = useState(animatedValue);

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

  return isVisible ? (
    <Box
      position="absolute"
      right={0}
      left={0}
      bottom={0}
      top={0}
      justifyContent="flex-end"
      backgroundColor="transparent"
    >
      <AnimatedBox
        style={[StyleSheet.absoluteFill, slideUp, backdrop]}
        backgroundColor="surfaceVisible"
      >
        <Box
          justifyContent="flex-end"
          flex={1}
          alignContent="center"
          alignItems="center"
          paddingBottom="s"
          borderTopLeftRadius="large"
          borderTopRightRadius="large"
          paddingTop="l"
        >
          {children}
          <Button
            title="Close"
            onPress={() => onClose()}
            backgroundColor="surface"
            marginTop="l"
            marginBottom="m"
          />
        </Box>
      </AnimatedBox>
    </Box>
  ) : null;
};
