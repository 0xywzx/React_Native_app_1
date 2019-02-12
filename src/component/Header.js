import React, { Component } from 'react';
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
  Button,
} from 'react-native';

export default class Header extends Component {
  state = {
    name: '',
    email: '',
  };
  componentDidMount = () => {
    AsyncStorage.getItem('name').then(value => this.setState({ name: value }));
    AsyncStorage.getItem('email').then(value =>
      this.setState({ email: value })
    );
  };

  setName = value => {
    AsyncStorage.setItem('name', value).then(() => {
      this.setState({ name: value });
    });
  };
  setEmail = value => {
    AsyncStorage.setItem('email', value).then(() => {
      this.setState({ email: value });
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.setName}
          placeholder="Enter Name"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={this.setEmail}
          placeholder="Enter Email"
        />
        <Text>
          Name: {this.state.name}
        </Text>
        <Text>
          Email: {this.state.email}
        </Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button title="Clear" color="#841584" onPress={this.clearText} />
          <Button title="Save" color="#841584" onPress={this.setName} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#FFF',
  },
  textInput: {
    margin: 15,
    height: 35,
    width: 200,
    borderWidth: 1,
    padding: 5,
  },
});

// skip this line if using Create React Native App
