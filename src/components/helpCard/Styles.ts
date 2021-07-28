import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  textHeader: TextStyle;
  subText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },

  textHeader: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 10,
  },

  subText: {
    marginTop: 10,
    color: 'grey',
  },
});

export default styles;
