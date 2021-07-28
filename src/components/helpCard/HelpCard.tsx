import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './Styles';

export const HelpCard: React.FC<{ title: string; subText: string }> = ({
  title,
  subText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{title}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  );
};
