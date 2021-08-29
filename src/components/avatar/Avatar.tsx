import { VariantProps } from '@shopify/restyle';
import React from 'react';
import {
  StyledImageProps,
  SystemImage,
} from '../../themes/systemImage/SystemImage';
import { Theme } from '../../themes/theme';

type AvatarProps = {
  source: string;
};

export const Avatar: React.FC<StyledImageProps> = ({ source, variant }) => {
  return <SystemImage source={source} variant={variant} />;
};
