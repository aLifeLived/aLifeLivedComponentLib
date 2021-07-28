import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  main: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default styles;
