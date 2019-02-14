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
      applause1: 100,
      applauded1: 0,
      applause2: 100,
      applauded2: 0,
    };
  }

  _onLongPressButton() {
    Alert.alert(
      '拍手した人',
      'User1:',

      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

   componentDidMount /*getcount*/ = async () => {
    let countapplause = '';
    let countapplauded = '';
    let countapplause1 = '';
    let countapplauded1 = '';
    let countapplause2 = '';
    let countapplauded2 = '';

    try {
      countapplause = await AsyncStorage.getItem('applause') || '0';
        countapplause = parseInt(countapplause,10);
        this.setState({applause:countapplause})
      countapplauded = await AsyncStorage.getItem('applauded') || '0';
        countapplauded = parseInt(countapplauded,10);
        this.setState({applauded:countapplauded})

      countapplause = await AsyncStorage.getItem('applause1') || '0';
        countapplause = parseInt(countapplause,10);
        this.setState({applause1:countapplause})
      countapplauded = await AsyncStorage.getItem('applauded1') || '0';
        countapplauded = parseInt(countapplauded,10);
        this.setState({applauded1:countapplauded})

      countapplause = await AsyncStorage.getItem('applause2') || '0';
        countapplause = parseInt(countapplause,10);
        this.setState({applause2:countapplause})
      countapplauded = await AsyncStorage.getItem('applauded2') || '0';
        countapplauded = parseInt(countapplauded,10);
        this.setState({applauded2:countapplauded})
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  handlClick= async ()=> {
      const {
        mainuser,
        subuser,
      } = this.props;

      if (this.state.count < 15) { //提出前に修正
        this.setState({count: this.state.count + 1});
      } else{
        Alert.alert('Alert', '1ユーザーが１つの投稿に拍手をできるのは１５回までです');
        return;
      }

      /*
      const countapplause = this.state.applause - 1;
      const countapplauded = this.state.applauded + 1;
      const countapplause1 = this.state.applause1 - 1;
      const countapplauded1 = this.state.applauded1 + 1;
      const countapplause2 = this.state.applause2 - 1;
      const countapplauded2 = this.state.applauded2 + 1;*/
      try{
        let keys = [
          ['applause', countapplause],['applauded', countapplauded],
          ['applause1', countapplause1],['applauded1', countapplauded1],
          ['applause2', countapplause2],['applauded2', countapplauded2],
        ];

        if (mainuser === 'User1'){
          const countapplauded = this.state.applauded + 1;
          await AsyncStorage.setItem('applauded', countapplauded.toString());
            this.setState({ applauded: countapplauded});
        } else if (mainuser === 'User2') {
          const countapplauded1 = this.state.applauded1 + 1;
        } else if (mainuser === 'User3') {
          const countapplauded2 = this.state.applauded2 + 1;
        } else if (subuser === 'User1'){
          const countapplauded = this.state.applauded + 1;
          await AsyncStorage.setItem('applause', countapplause.toString());
            this.setState({ applause: countapplause});
        } else if (subuser === 'User2') {
          const countapplauded1 = this.state.applauded1 + 1;
        } else if (subuser === 'User3') {
          const countapplauded2 = this.state.applauded2 + 1;
        }



        await AsyncStorage.setItem('applause1', countapplause1.toString());
          this.setState({ applause1: countapplause1});
        await AsyncStorage.setItem('applauded1', countapplauded1.toString());
          this.setState({ applauded1: countapplauded1});

        await AsyncStorage.setItem('applause2', countapplause2.toString());
          this.setState({ applause2: countapplause2});
        await AsyncStorage.setItem('applauded2', countapplauded2.toString());
          this.setState({ applauded2: countapplauded2});
     }
     catch(error){
       console.log(error.message);
     }
  };

  render() {
    const {
      mainuser,
      subuser,
      head,
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
          {this.state.applauded}/
          {this.state.applause1}/
          {this.state.applauded1}/
          {this.state.applause2}/
          {this.state.applauded2}/
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
