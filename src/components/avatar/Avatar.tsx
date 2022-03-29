import React from 'react';
import FastImage, { Priority, ResizeMode } from 'react-native-fast-image';
import { Box } from '../../themes/box/Box';
import {
  StyledImageProps,
  SystemImage,
} from '../../themes/systemImage/SystemImage';
import { Icon } from '../icon/Icon';

type AvatarProps = {
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
      borderRadius="xXXlarge"
      alignItems="center"
      justifyContent="center"
      {...rest}
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
