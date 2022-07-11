import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export const CenterView = ({ children }: { children: ReactElement }) => {
  return <View style={style.main}>{children}</View>;
};

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
