// @flow
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const MyStatusBar = (props) => {
  return (
    <View style={styles.statusBarBackground}>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (StatusBar.currentHeight) ? StatusBar.currentHeight : 20,
    backgroundColor: '#000'
  }
});

export { MyStatusBar };
