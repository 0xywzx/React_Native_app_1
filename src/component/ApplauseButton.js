import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableHighlight,
  Alert,
} from 'react-native';


export default class ApplauseButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      applause: 100,
      applauded: 0,
    };
  }

  _onLongPressButton() {
    Alert.alert(
      '拍手した人',
      '',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

   componentDidMount /*getcount*/ = async () => {
    let countapplause = '';
    let countapplauded = '';
    try {
      countapplause = await AsyncStorage.getItem('applause') || '0';
        countapplause = parseInt(countapplause,10);
        this.setState({applause:countapplause})
      countapplauded = await AsyncStorage.getItem('applauded') || '0';
        countapplauded = parseInt(countapplauded,10);
        this.setState({applauded:countapplauded})
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  handlClick= async ()=> {
      this.setState({count: this.state.count + 1});
      const countapplause = this.state.applause /*- 1*/;
      const countapplauded = this.state.applauded /*+ 1*/;
      try{
        let keys = [['applause', countapplause],['applauded', countapplauded]];
      await AsyncStorage.setItem('applause', countapplause.toString());
        this.setState({ applause: countapplause});
      await AsyncStorage.setItem('applauded', countapplauded.toString());
        this.setState({ applauded: countapplauded});
     }
     catch(error){
       console.log(error.message);
     }
  };

  render() {
    const {
      mainuser,
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {this.handlClick()}}
          onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>👋</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.count}>
          {this.state.count}/
          {this.state.applause}/
          {this.props.mainuser}
          {this.state.applauded}
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
