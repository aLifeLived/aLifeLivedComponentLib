import React from 'react';
import {
  StyledImageProps,
  SystemImage,
} from '../../themes/systemImage/SystemImage';

export const Avatar: React.FC<StyledImageProps> = ({ source, variant }) => {
  return <SystemImage source={source} variant={variant} />;
};
