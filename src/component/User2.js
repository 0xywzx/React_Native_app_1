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
  Image,
} from 'react-native';

export default class User2 extends Component {
  state = {
    name: '',
    email: '',
    applause: '',
    applauded: '',
  };
  componentDidMount = () => {
    AsyncStorage.getItem('name1').then(value =>
      this.setState({ name: value })
    );
    AsyncStorage.getItem('email1').then(value =>
      this.setState({ email: value })
    );
    AsyncStorage.getItem('applause1').then(value =>
      this.setState({ applause: value })
    );
    AsyncStorage.getItem('applauded1').then(value =>
      this.setState({ applauded: value })
    );
  };

  setName = value => {
    AsyncStorage.setItem('name1', value).then(() => {
      this.setState({ name: value });
    });
  };
  setEmail = value => {
    AsyncStorage.setItem('email1', value).then(() => {
      this.setState({ email: value });
    });
  };
  setapplause = value => {
   AsyncStorage.setItem('applause1', value).then(() => {
     this.setState({ applause: value });
   });
 };
 setapplaused = value => {
   AsyncStorage.setItem('applauded1', value).then(() => {
     this.setState({ applauded: value });
   });
 };

  saveText = () => {
    const value1 = this.state.name;
    const value2 = this.state.email;
    const value3 = this.state.applause;
    const value4 = this.state.applauded;
    let keys = [['name1', value1], ['email1', value2], ['applause1', value3], ['applaused1', value4]];
    AsyncStorage.multiSet(keys, err => {
      console.log('Value1' + value1 + ' ' + value4);
      this.setState({
        name: value1,
        email: value2,
        applause: value3,
        applauded: value4,
      });
    });
  };

  clearText = () => {
    let keys = ['name1', 'email1', 'applause1', 'applaused1'];
    AsyncStorage.multiRemove(keys, err => {
      this.getValueFromStorage();
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userinfo}>
          <Text>
            {this.state.name}
          </Text>
          <Image
            source={require('../image/User2.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.applause}>
          <Text style={styles.applauseText}>
             拍手できる: {this.state.applause}
          </Text>
          <Text>
            　拍手された: {this.state.applauded}
          </Text>
        </View>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: 400,
    left: 0,
    flexDirection: 'row',
  },
  userinfo: {
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
  },
  applause: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
  },
  applauseText: {
    marginLeft:30,
    marginRight:30,
  },
  textInput: {
    height: 35,
    width: 200,
    borderWidth: 1,
    padding:5,
  },
});
