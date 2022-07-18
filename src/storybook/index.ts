// if you use expo remove this line
import { AppRegistry, LogBox } from 'react-native';

import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { loadStories } from './storyLoader';
import './rn-addons';
import { ThemeDecorator } from './ThemeDecorator';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(ThemeDecorator);
// import stories
configure(() => {
  loadStories();
}, module);

// TO BE REMOVED WHEN WE UPDATE TO 0.69 REACT NATIVE
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'EventEmitter.removeListener',
]);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('aLifeLivedComponentLib', () => StorybookUIRoot);

export default StorybookUIRoot;
