import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class ApplauseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  // handleClickメソッドを定義してください
  handleClick() {
  	this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.count}
        </Text>
        <Button title="👋" onPress={() => {this.handleClick()}} />
      </View>
    );
  }
}
