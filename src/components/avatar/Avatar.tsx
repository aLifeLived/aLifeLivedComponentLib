import React from 'react';
import FastImage, { Priority, ResizeMode } from 'react-native-fast-image';
import { Box } from '../../themes/Box';
import {
  StyledImageProps,
  SystemImage,
} from '../../themes/systemImage/SystemImage';
import { Icon } from '../icon/Icon';

type AvatarProps = {
  iconBorderRadius?: 'xXXlarge' | 'medium';
  resizeMode?: ResizeMode;
  iconWidth?: number;
  iconHeight?: number;
  iconSize?: number;
  source: {
    uri: string;
    priority: Priority;
  };
};

export const Avatar: React.FC<AvatarProps & StyledImageProps> = ({
  source,
  resizeMode = 'cover',
  variant,
  iconBorderRadius,
  iconWidth,
  iconHeight,
  iconSize,
  ...rest
}) => {
  return !source.uri ? (
    <Box
      borderWidth={1}
      padding="m"
      width={iconWidth}
      height={iconHeight}
      borderRadius={iconBorderRadius}
      alignItems="center"
      justifyContent="center"
    >
      <Icon icon="user" size={iconSize} />
    </Box>
  ) : (
    <SystemImage
      source={{
        uri: source.uri,
        priority: FastImage.priority[source.priority],
      }}
      resizeMode={FastImage.resizeMode[resizeMode]}
      variant={variant}
      {...rest}
    />
  );
};
