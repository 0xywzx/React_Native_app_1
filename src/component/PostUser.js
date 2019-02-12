import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import User1_photo from './User1_photo';
import User2_photo from './User2_photo';
import User3_photo from './User3_photo';

export default class PostUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pick: ''
    };
  }

  render() {
    var data = [["User1", "User2", "User3"],];
    return (
      <View style={styles.dropdown}>
        <View style={{height: 0}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          handler={(selection, row) => this.setState({pick: data[selection][row]})}
          data={data}
        >
          <View style={styles.user}>
            { this.state.pick === 'User1' && <User1_photo /> }
            { this.state.pick === 'User2' && <User2_photo /> }
            { this.state.pick === 'User3' && <User3_photo /> }
          </View>
        </DropdownMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#FFF',
    height: 100,
    width: 90,
    paddingLeft: 10,
  },
  user: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
