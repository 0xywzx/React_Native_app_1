import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
} from 'react-native';

export default class ApplauseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      applause: 100,
      applaused: 0,
    };
  }

  componentDidMount = () => {
    const applauseCount = parseInt(AsyncStorage.getItem('applause'),10);
      this.setState({applaused:applauseCount});
  };

  handlClick() {
  	this.setState({count: this.state.count + 1});
    const countapplause = this.state.applause + 1;
     AsyncStorage.setItem('applause', countapplause.toString()).then(() => {
       this.setState({ applause: this.state.applause + 1});
     });
 };

  render() {
    return (
      <View style={styles.container}>
        <Button title="👋"
          onPress={() => {
            this.handlClick()
          }} />
        <Text style={styles.count}>
          {this.state.count}/
          {this.state.applause}/
          {this.state.applaused}
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
