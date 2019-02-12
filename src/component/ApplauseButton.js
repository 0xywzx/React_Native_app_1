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

  handleClick() {
  	this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="👋" onPress={() => {this.handleClick()}} />
        <Text style={styles.count}>
          {this.state.count}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  count: {
    paddingTop: 12,
  },
})
