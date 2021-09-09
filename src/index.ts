import { library } from '@fortawesome/fontawesome-svg-core';

// Components
import { HelpCard } from './components/helpCard/HelpCard';
import { ThemeProvider } from './themes/ThemeProvider';
import { RecordingTimer } from './components/recordingTimer/RecordingTimer';
import { SignupModal } from './components/signupModal/SignupModal';
import { NoCtaModal } from './components/noCtaModal/NoCtaModal';
import { EditAndDeleteBottomSheet } from './components/editAndDeleteBottomSheet/EditAndDeleteBottomSheet';
import { Icon } from './components/icon/Icon';
import { StoryCard } from './components/storyCard/StoryCard';
import { Avatar } from './components/avatar/Avatar';

// UI
import { Box } from './themes/Box';
import { Text } from './themes/text/Text';
import { iconList } from './themes/systemIcon/IconList';

library.add(iconList);

export {
  StoryCard,
  Avatar,
  Icon,
  HelpCard,
  ThemeProvider,
  Box,
  Text,
  RecordingTimer,
  SignupModal,
  NoCtaModal,
  EditAndDeleteBottomSheet,
};
