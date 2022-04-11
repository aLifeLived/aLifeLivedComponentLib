import { library } from '@fortawesome/fontawesome-svg-core';

// Assets
import Listen from './assets/svg/listen.svg';
import Record from './assets/svg/record.svg';
import Preserve from './assets/svg/preserve.svg';
import MyselfRecordSVG from './assets/svg/myself-recording.svg';
import SomeoneElseRecordSVG from './assets/svg/someone-else-recording.svg';
import CovidThemeSVG from './assets/svg/covid-theme.svg';
import DraftsSVG from './assets/svg/drafts.svg';
import LifeStoryThemeSVG from './assets/svg/life-story-theme.svg';
import MyStoriesSVG from './assets/svg/my-stories.svg';
import TravelThemeSVG from './assets/svg/travel-theme.svg';
import SessionChecklistSVG from './assets/svg/session-checklist.svg';

// Components
import { HelpCard } from './components/helpCard/HelpCard';
import { ThemeProvider } from './themes/ThemeProvider';
import { RecordingTimer } from './components/recordingTimer/RecordingTimer';
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
import { OnboardingContent } from './components/onboardingContent/OnboardingContent';

// UI
import { Box } from './themes/box/Box';
import { Text } from './themes/text/Text';
import { iconList } from './themes/systemIcon/IconList';
import { useTheme } from './themes/hooks/useTheme';
import { BlurLayout } from './themes/systemBlurLayout/SystemBlurLayout';
import { CardContainer } from './themes/card/CardContainer';
import { CardHeader } from './themes/card/CardHeader';
import { CardOverlay } from './themes/card/CardOverlay';
import { CardContent } from './themes/card/CardContent';
import { SystemFlatList } from './themes/systemFlatList/SystemFlatList';
import { SystemPressable } from './themes/systemPressable/SystemPressable';
import { SystemScrollView } from './themes/systemScrollView/SystemScrollView';
import { SystemKeyboardAvoidingView } from './themes/systemKeyboardAvoidingView/SystemKeyboardAvoidingView';

library.add(iconList);

export {
  SystemPressable,
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
  NoCtaModal,
  EditAndDeleteBottomSheet,
  DraftStoryCard,
  ThemeCard,
  OnboardingContent,
  SystemKeyboardAvoidingView,
  Record,
  Listen,
  Preserve,
  MyselfRecordSVG,
  SomeoneElseRecordSVG,
  CardContainer,
  CardHeader,
  CardContent,
  CardOverlay,
  CovidThemeSVG,
  DraftsSVG,
  LifeStoryThemeSVG,
  MyStoriesSVG,
  TravelThemeSVG,
  SessionChecklistSVG,
};
