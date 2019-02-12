/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import Header from './src/component/Header';
import CommentIndex from './src/component/CommentIndex';
import PostUser from './src/component/PostUser';

export default class app extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CommentIndex />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
