import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Components
import { Box } from './box/Box';
import { Text } from './text/Text';
import { ColorThemeTokens } from './palette';
import { ScrollView } from 'react-native';

const GeneratedBox = ({
  color,
  children,
}: {
  color: ColorThemeTokens;
  children: React.ReactNode;
}) => (
  <Box
    backgroundColor={color}
    alignItems="center"
    width="50%"
    alignSelf="center"
    margin="s"
    padding="m"
    borderRadius="medium"
  >
    {children}
  </Box>
);

storiesOf('Palette', module)
  .addDecorator(Story => Story())
  .add('Color Background', () => (
    <ScrollView>
      <GeneratedBox color="primary">
        <Text color="textContrastHigh">Primary</Text>
        <Text color="textContrastHigh">HEX: #67B6A8</Text>
      </GeneratedBox>

      <GeneratedBox color="primaryOverlay">
        <Text color="textContrastHigh">Primary overlay</Text>
        <Text color="textContrastHigh">HEX: #67B6A8</Text>
      </GeneratedBox>

      <GeneratedBox color="backgroundHighlight">
        <Text color="textContrastHigh">Blue</Text>
        <Text color="textContrastHigh">HEX: #00B5CD</Text>
      </GeneratedBox>

      <GeneratedBox color="secondary">
        <Text color="textContrastHigh">Secondary</Text>
        <Text color="textContrastHigh">HEX: #F08969</Text>
      </GeneratedBox>

      <GeneratedBox color="secondaryOverlay">
        <Text color="textContrastHigh">Secondary overlay</Text>
        <Text color="textContrastHigh">HEX: #F08969</Text>
      </GeneratedBox>

      <GeneratedBox color="primaryContrast">
        <Text color="textContrastXLow">Primary contrast</Text>
        <Text color="textContrastXLow">HEX: #67B6A8</Text>
      </GeneratedBox>

      <GeneratedBox color="black">
        <Text color="textContrastXLow">Black</Text>
        <Text color="textContrastXLow">HEX: #000000</Text>
      </GeneratedBox>

      <GeneratedBox color="blue">
        <Text color="textContrastHigh">Blue</Text>
        <Text color="textContrastHigh">HEX: #00B5CD</Text>
      </GeneratedBox>
    </ScrollView>
  ));
