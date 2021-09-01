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
  source: {
    uri: string;
    priority: Priority;
  };
};

export const Avatar: React.FC<AvatarProps & StyledImageProps> = ({
  source,
  resizeMode = 'center',
  variant,
  iconBorderRadius,
  ...rest
}) => {
  return !source.uri ? (
    <Box
      borderWidth={1}
      padding="m"
      width={50}
      height={50}
      borderRadius={iconBorderRadius}
      alignItems="center"
      justifyContent="center"
    >
      <Icon icon="user" size={30} />
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
