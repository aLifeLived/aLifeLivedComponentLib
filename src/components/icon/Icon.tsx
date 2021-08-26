import React from 'react';
import {
  StyledIconProps,
  SystemIcon,
} from '../../themes/systemIcon/SystemIcon';

export const Icon: React.FC<StyledIconProps> = ({ ...rest }) => {
  return <SystemIcon {...rest} />;
};
