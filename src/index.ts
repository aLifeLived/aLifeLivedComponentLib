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
import { UserCard } from './components/userCard/UserCard';
import { DraftStoryCard } from './components/draftStoryCard/DraftStoryCard';
import { ThemeCard } from './components/themeCard/ThemeCard';
import { Selector } from './components/selector/Selector';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';
import { UserCardSkeleton } from './components/userCard/UserCardSkeleton';
import { SelectBox } from './components/selectBox/SelectBox';

// UI
import { Box } from './themes/box/Box';
import { Text } from './themes/text/Text';
import { iconList } from './themes/systemIcon/IconList';
import { BlurLayout } from './themes/systemBlurLayout/SystemBlurLayout';
import { SystemFlatList } from './themes/systemFlatList/SystemFlatList';
import { SystemScrollView } from './themes/systemScrollView/SystemScrollView';
import { useTheme } from './themes/hooks/useTheme';

library.add(iconList);

export {
  StoryCard,
  UserCardSkeleton,
  SelectBox,
  Button,
  Selector,
  UserCard,
  SystemFlatList,
  SystemScrollView,
  Avatar,
  Input,
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
  DraftStoryCard,
  ThemeCard,
};
