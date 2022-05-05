import React from 'react';
import { storiesOf } from '@storybook/react-native';

// SVG
import MyStoriesSVG from '../../assets/svg/my-stories.svg';
import DraftsSVG from '../../assets/svg/drafts.svg';
import TravelThemeSVG from '../../assets/svg/travel-theme.svg';
import COVIDThemeSVG from '../../assets/svg/covid-theme.svg';
import LifeStorySVG from '../../assets/svg/life-story-theme.svg';

// Component
import { CardContainer } from './CardContainer';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';
import { CardOverlay } from './CardOverlay';

// UI
import { Box } from '../box/Box';
import { SystemScrollView } from '../systemScrollView/SystemScrollView';

storiesOf('Cards', module)
  .addDecorator(Story => Story())
  .add('Card with headers', () => (
    <Box flex={1}>
      <Box
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        <Box marginRight="m" width="40%">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="primaryOverlay"
          >
            <CardHeader title="My stories" />
            <CardContent SVG={<MyStoriesSVG height={100} />} />
          </CardContainer>
        </Box>

        <Box marginBottom="m" width="40%">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="secondaryOverlay"
          >
            <CardHeader title="Travel" />
            <CardContent SVG={<TravelThemeSVG height={100} />} />
          </CardContainer>
        </Box>

        <Box marginRight="m" width="40%">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="backgroundXXLow"
          >
            <CardHeader title="COVID" />
            <CardContent SVG={<COVIDThemeSVG />} />
          </CardContainer>
        </Box>

        <Box width="40%">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="backgroundXXLow"
          >
            <CardHeader title="Drafts" />
            <CardContent SVG={<DraftsSVG height={90} />} />
          </CardContainer>
        </Box>

        <Box width="40%" marginTop="m">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="backgroundXXLow"
          >
            <CardHeader title="Lift Story" />
            <CardContent SVG={<LifeStorySVG height={90} />} />
          </CardContainer>
        </Box>
      </Box>
    </Box>
  ))
  .add('Card with overlay text', () => (
    <SystemScrollView alignContent="center" flex={1}>
      <Box
        flexDirection="row"
        marginLeft="m"
        marginRight="m"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box margin="s">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="secondaryOverlay"
          >
            <CardContent SVG={<MyStoriesSVG height={150} width={150} />} />
            <CardOverlay title="School years" />
          </CardContainer>
        </Box>
        <Box margin="s">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="secondaryOverlay"
          >
            <CardContent SVG={<DraftsSVG height={150} width={150} />} />
            <CardOverlay title="Early life" />
          </CardContainer>
        </Box>

        <Box margin="s">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="secondaryOverlay"
          >
            <CardContent SVG={<TravelThemeSVG height={150} width={150} />} />
            <CardOverlay title="School years" />
          </CardContainer>
        </Box>

        <Box margin="s">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="secondaryOverlay"
          >
            <CardContent SVG={<COVIDThemeSVG height={150} width={150} />} />
            <CardOverlay title="Sports" />
          </CardContainer>
        </Box>

        <Box margin="s">
          <CardContainer
            onPress={() => console.log('press')}
            backgroundColor="secondaryOverlay"
          >
            <CardContent SVG={<LifeStorySVG height={150} width={150} />} />
          </CardContainer>
        </Box>
      </Box>
    </SystemScrollView>
  ));
