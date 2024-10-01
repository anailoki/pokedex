/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const FullScreenLoader = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}>
      <ActivityIndicator size={50} />
    </View>
  );
};
