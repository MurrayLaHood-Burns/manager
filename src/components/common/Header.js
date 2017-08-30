// @flow
import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const { textStyle, headerCard } = styles;

  return (
    <View style={headerCard}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  headerCard: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

export {Header};
