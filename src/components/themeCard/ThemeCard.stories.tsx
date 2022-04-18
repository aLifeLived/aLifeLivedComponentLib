import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import { ThemeCard } from './ThemeCard';

// UI
import { Box } from '../../themes/box/Box';
import { FlatList } from 'react-native';

const data = [
  {
    id: '1',
    title: 'TEST',
    imageUrl:
      'https://a-life-lived-prod-media-asset-source.s3.ap-southeast-2.amazonaws.com/THEME_PREVIEW_IMAGE/ct/your-life-story-theme.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgGH6I%2Ft4qArm6t2DOGQxUNfu4B947ejX97y0tmBzGjpsCIBI0COmSX8b%2FcEKmmDBIuTo69N5YmRHsDcGhnNsoKLnkKu0CCMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNTk4MjY5MTY4MTkxIgzGtqjsqtjau8rwwmAqwQKGZlZPwVLSLanrTpC2P3MlN36I7wzfcsqPivA4b3C%2BmHBpl%2Fu7b6SvuuYbG%2FjGc2weTQLPrpUl593NmzElrML3%2FA1ZKjSH6We2GZilaGxgrKGZf%2F6RSK525NzVj0mveIq%2B5340pVbLjuj61e%2F0cNWtR5AyVwApuu5VHMDlLdOfNmYznB11tdOnHnIltdmGpj0Qa1i8LcptEq%2FZgTr9hBwXGan5J3MOGed5DFRU7eYWY9rSwIQt%2Fka3oOusUhBmS%2F2ws1sRi9K77z7qweU2qY8IZ245i9yhqotMmYsqOtPJl75USm3hNCW%2Fo14tZRYRgqF%2BeJzg55FPs1vnAm35Hs3NGZ0sV4WfOvuee%2Bab7r4z7MTgObHV43Pouw3WwSlN0NEKKv2zRSvfPjHsKKusFekjtcItKXBMuovpMeacQJ3QFuEwseXykgY6tAJayIH0JUr3GInKyM9InpeYteSrw0q9FHDostt5RusXzdpG4sjWAxIAJ2v%2BhgRqu08Qww%2F2OhFx74xd2uuwnQTpcpB1%2BEBpgnoG91NmWD%2Fn07FK3%2BCy%2Bn%2FB0Oz%2BcScAUwhApSS52d3vNGtLn6gcFXW9HlLi9JH6xiugPQP1IM%2BfENCdA7OpQevUXTBsx%2FBlZKcN%2BfLwRGuyjYOTWHt83undvUf3CK0TnXFHC6MJIxwZ6RI0f7hGxadjoneSVbZasFygjcFD0gh9NUTj8OGoKMdshMXjaF99Gq5T%2F3BcQva1zNUk82kdZgnWV0DIrVXWpGhY1AXbeDSgkIrQdPe6jaNlKsSEN5ZXqHAq6IDKKlgvPnieKJd0fYyaZmOh7nOce4QX0nWihsry96cZ6Q9o7I4H6kZrgw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220418T005558Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYWS47BI76TUZZNWV%2F20220418%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=1a655a9ad2d5eb111fd4680dde504d6a9c9a156e2e40accd152176e18f4d89b3',
    subText: 'test subtext',
  },
  {
    id: '2',
    title: 'TEST',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    subText: 'test subtext',
  },
  {
    id: '3',
    title: 'TEST',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    subText: 'test subtext',
  },
  {
    id: '4',
    title: 'TEST',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    subText: 'test subtext',
  },
];

storiesOf('Theme card', module)
  .addDecorator(Story => Story())
  .add('Default theme card in list', () => (
    <Box flex={1} backgroundColor="white">
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={() => (
          <Box margin="m" width="40%">
            <ThemeCard
              title={text('Title', 'A Life Lived')}
              imageUrl="https://a-life-lived-prod-media-asset-source.s3.ap-southeast-2.amazonaws.com/THEME_PREVIEW_IMAGE/ct/your-life-story-theme.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgGH6I%2Ft4qArm6t2DOGQxUNfu4B947ejX97y0tmBzGjpsCIBI0COmSX8b%2FcEKmmDBIuTo69N5YmRHsDcGhnNsoKLnkKu0CCMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNTk4MjY5MTY4MTkxIgzGtqjsqtjau8rwwmAqwQKGZlZPwVLSLanrTpC2P3MlN36I7wzfcsqPivA4b3C%2BmHBpl%2Fu7b6SvuuYbG%2FjGc2weTQLPrpUl593NmzElrML3%2FA1ZKjSH6We2GZilaGxgrKGZf%2F6RSK525NzVj0mveIq%2B5340pVbLjuj61e%2F0cNWtR5AyVwApuu5VHMDlLdOfNmYznB11tdOnHnIltdmGpj0Qa1i8LcptEq%2FZgTr9hBwXGan5J3MOGed5DFRU7eYWY9rSwIQt%2Fka3oOusUhBmS%2F2ws1sRi9K77z7qweU2qY8IZ245i9yhqotMmYsqOtPJl75USm3hNCW%2Fo14tZRYRgqF%2BeJzg55FPs1vnAm35Hs3NGZ0sV4WfOvuee%2Bab7r4z7MTgObHV43Pouw3WwSlN0NEKKv2zRSvfPjHsKKusFekjtcItKXBMuovpMeacQJ3QFuEwseXykgY6tAJayIH0JUr3GInKyM9InpeYteSrw0q9FHDostt5RusXzdpG4sjWAxIAJ2v%2BhgRqu08Qww%2F2OhFx74xd2uuwnQTpcpB1%2BEBpgnoG91NmWD%2Fn07FK3%2BCy%2Bn%2FB0Oz%2BcScAUwhApSS52d3vNGtLn6gcFXW9HlLi9JH6xiugPQP1IM%2BfENCdA7OpQevUXTBsx%2FBlZKcN%2BfLwRGuyjYOTWHt83undvUf3CK0TnXFHC6MJIxwZ6RI0f7hGxadjoneSVbZasFygjcFD0gh9NUTj8OGoKMdshMXjaF99Gq5T%2F3BcQva1zNUk82kdZgnWV0DIrVXWpGhY1AXbeDSgkIrQdPe6jaNlKsSEN5ZXqHAq6IDKKlgvPnieKJd0fYyaZmOh7nOce4QX0nWihsry96cZ6Q9o7I4H6kZrgw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220418T005805Z&X-Amz-SignedHeaders=host&X-Amz-Expires=14400&X-Amz-Credential=ASIAYWS47BI76TUZZNWV%2F20220418%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=dab6d249d29a4fa2bf79263b623d4b579ce4db65212e75a1deb28af260303e41"
              onPress={action('On press fired')}
            />
          </Box>
        )}
      />
    </Box>
  ));
