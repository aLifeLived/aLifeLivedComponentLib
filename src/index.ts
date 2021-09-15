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
import { MiniPlayer } from './components/miniPlayer/MiniPlayer';
import { TopicCard } from './components/topicCard/TopicCard';

// UI
import { Box } from './themes/box/Box';
import { Text } from './themes/text/Text';
import { iconList } from './themes/systemIcon/IconList';
import { BlurLayout } from './themes/systemBlurLayout/SystemBlurLayout';
import { useTheme } from './themes/hooks/useTheme';

library.add(iconList);

export {
  StoryCard,
  Avatar,
  useTheme,
  Icon,
  MiniPlayer,
  BlurLayout,
  HelpCard,
  ThemeProvider,
  Box,
  Text,
  RecordingTimer,
  TopicCard,
  SignupModal,
  NoCtaModal,
  EditAndDeleteBottomSheet,
};
