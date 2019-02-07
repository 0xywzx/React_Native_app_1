import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    var data = [["User1", "User2", "User3"], [], []];
    return (
      <View style={styles.dropdown}>
        <View style={{height: 50}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}
          // checkImage={}
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}}
          // maxHeight={300}
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >

          <View style={styles.user}>
            { this.state.text === 'User1' && <User1 /> }
            { this.state.text === 'User2' && <User2 /> }
            { this.state.text === 'User3' && <User3 /> }
          </View>

        </DropdownMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#FFF',
    height: 250,
  },
  user: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
