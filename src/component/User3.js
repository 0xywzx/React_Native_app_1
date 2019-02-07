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

export default class User2 extends Component {
  state = {
    name: '',
    email: '',
    applause:'',
    applaused:'',
  };
  componentDidMount = () => {
    this.getValueFromStorage();
  };

  getValueFromStorage = () => {
    let keys = ['name2', 'email2', 'applause2', 'applaused2'];
    AsyncStorage.multiGet(keys).then(result => {
      this.setState({
        name: result[0][1],
        email: result[1][1],
        applause:　result[2][1],
        applaused: result[3][1],
      });
    });
  };

  setName = value => {
    this.setState({ name: value });
  };
  setEmail = value => {
    this.setState({ email: value });
  };
  setApplause = value => {
    this.setState({ applause: value });
  };
  setApplaused = value => {
    this.setState({ applaused: value });
  };


  saveText = () => {
    const value1 = this.state.name;
    const value2 = this.state.email;
    const value3 = this.state.applause;
    const value4 = this.state.applaused;
    let keys = [['name2', value1], ['email2', value2], ['applause2', value3], ['applaused2', value4]];
    AsyncStorage.multiSet(keys, err => {
      console.log('Value1' + value1 + ' ' + value4);
      this.setState({
        name: value1,
        email: value2,
        applause: value3,
        applaused: value4,
      });
    });
  };

  clearText = () => {
    let keys = ['name2', 'email2', 'applause2', 'applaused2'];
    AsyncStorage.multiRemove(keys, err => {
      this.getValueFromStorage();
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Name: {this.state.name}
        </Text>
        <Text>
          Email: {this.state.email}
        </Text>
        <Text>
          拍手できる: {this.state.applause}
        </Text>
        <Text>
          拍手された: {this.state.applaused}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    margin: 15,
    height: 35,
    width: 200,
    borderWidth: 1,
    padding:5,
  },
});
