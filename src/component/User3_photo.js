

import React, { Component } from 'react';
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  Image,
} from 'react-native';

export default class User1_photo extends Component {
  state = {
    email: '',
  };
  componentDidMount = () => {
    AsyncStorage.getItem('email2').then(value =>
      this.setState({ email: value })
    );
  };

  setEmail = value => {
    AsyncStorage.setItem('email2', value).then(() => {
      this.setState({ email: value });
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Image
            source={require('../image/User3.png')}
            style={{ width: 35, height: 35, }}
          />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    margin: 15,
    height: 35,
    width: 200,
    borderWidth: 1,
    padding: 5,
  },
});
