import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {
  StyledIconProps,
  SystemIcon,
} from '../../themes/systemIcon/SystemIcon';

type IconProps = {
  icon: IconProp;
};

export const Icon: React.FC<IconProps & StyledIconProps> = ({
  icon,
  color,
  ...rest
}) => {
  return <SystemIcon icon={icon} color={color} {...rest} />;
};
