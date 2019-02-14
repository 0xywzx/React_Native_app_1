
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

export default class User1Applause extends Component {
  state = {
    name: '',
    email: '',
    applause: '',
    applaused: '',
  };
  componentDidMount = () => {
    AsyncStorage.getItem('name').then(value =>
      this.setState({ name: value })
    );
    AsyncStorage.getItem('email').then(value =>
      this.setState({ email: value })
    );
    AsyncStorage.getItem('applause').then(value =>
      this.setState({ applause: value })
    );
    AsyncStorage.getItem('applaused').then(value =>
      this.setState({ applaused: value })
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
  setapplause = value => {
   AsyncStorage.setItem('applause', value).then(() => {
     this.setState({ applause: value });
   });
 };
 setapplaused = value => {
   AsyncStorage.setItem('applaused', value).then(() => {
     this.setState({ email: value });
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
           source={require('../image/User1.png')}
           style={{ width: 50, height: 50 }}
         />
       </View>
       <View style={styles.applause}>
         <Text style={styles.applauseText}>
            拍手できる: {this.state.applause}
         </Text>
         <Text>
           　拍手された: {this.state.applaused}
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
