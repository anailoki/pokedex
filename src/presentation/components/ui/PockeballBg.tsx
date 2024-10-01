/* eslint-disable react-native/no-inline-styles */
import {StyleProp, Image, ImageStyle} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export const PockeballBg = ({style}: Props) => {
  const {isDark} = useContext(ThemeContext);

  const pockeballImg = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');

  return (
    <Image
      source={pockeballImg}
      style={[{width: 300, height: 300, opacity: 0.3}, style]}
    />
  );
};
