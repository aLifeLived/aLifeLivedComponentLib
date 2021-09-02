import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { SystemButton } from '../../themes/systemButton/SystemButton';
import {
  StyledIconProps,
  SystemIcon,
} from '../../themes/systemIcon/SystemIcon';

type IconProps = {
  icon: IconProp;
  onPress?: () => void;
};

export const Icon: React.FC<IconProps & StyledIconProps> = ({
  icon,
  color,
  onPress,
  ...rest
}) => {
  return onPress ? (
    <SystemButton onPress={() => onPress()}>
      <SystemIcon icon={icon} color={color} {...rest} />
    </SystemButton>
  ) : (
    <SystemIcon icon={icon} color={color} {...rest} />
  );
};
