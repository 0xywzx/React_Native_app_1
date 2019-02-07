/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

export default class CommentIndex extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  _onPress = (text) => {
    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
    });

    this.setState({
      list,
    });
  }

  render() {
    const {
      list,
    } = this.state;

    return (
      <View style={styles.container}>
      <Text>あなたの仲間の行動を紹介しよう</Text>
        <View style={styles.main}>
          <CommentInput onPress={this._onPress} />
          <View style={styles.CommentListContainer}>
            <FlatList
              style={styles.CommentList}
              data={list}
              renderItem={({ item }) => <CommentItem {...item} />}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  CommentListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  CommentList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});
