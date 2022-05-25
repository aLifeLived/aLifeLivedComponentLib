import React from 'react';
import { Box } from '../../themes/box/Box';
import { Text } from '../../themes/text/Text';
import {
  StyledOpacityProps,
  SystemButton,
} from '../../themes/systemButton/SystemButton';
import { Icon } from '../icon/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IDirectionButtonProps {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  variant?: 'cta';
  color?: string;
  leftIconName?: IconProp;
}

export const DirectionButton: React.FC<
  IDirectionButtonProps & StyledOpacityProps
> = ({ title, onPress, isDisabled, color, leftIconName, ...rest }) => {
  return (
    <SystemButton
      onPress={() => onPress()}
      paddingBottom="m"
      paddingTop="m"
      paddingHorizontal="s"
      borderBottomWidth={1}
      borderBottomColor="backgroundContrastMid"
      width="100%"
      disabled={isDisabled}
      {...rest}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row">
          {leftIconName && (
            <Icon
              icon={leftIconName}
              color="primary"
              size={20}
              marginRight="s"
              testID="direction-button-left-icon"
            />
          )}
          <Text variant="body" textAlign="center" color={color}>
            {title}
          </Text>
        </Box>
        <Box>
          <Icon icon="chevron-right" color="secondary" size={20} />
        </Box>
      </Box>
    </SystemButton>
  );
};
