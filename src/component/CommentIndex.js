/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User1_photo from './User1_photo';
import User2_photo from './User2_photo';
import User3_photo from './User3_photo';
import ApplauseButton from './ApplauseButton';


export default class CommentIndex extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      head: '',
      list: [],
      pick: '',
    };
  }

  _onPress = (text) => {

    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
      created: new Date,
      mainuser: this.state.head,
      subuser: this.state.pick,
    });

    this.setState({
      list,
    });
  }



  render() {
    const {
      head,
      list,
      pick,
    } = this.state;

    var data = [["User1", "User2", "User3"],];

    return (
      <View style={styles.container}>
        <View style={styles.dropdownHeader}>
        <View style={styles.dropdown}>
          <DropdownMenu
            style={{flex: 1}}
            bgColor={'white'}
            tintColor={'#666666'}
            activityTintColor={'green'}
            handler={(selection, row) => this.setState({head: data[selection][row]})}
            data={data}
          >
            <View style={styles.userHeader}>
              { this.state.head === 'User1' && <User1 /> }
              { this.state.head === 'User2' && <User2 /> }
              { this.state.head === 'User3' && <User3 /> }
            </View>
          </DropdownMenu>
        </View>
        </View>
      <Text>To Do</Text>
        <View style={styles.main}>
          <View style={styles.post}>
            <View style={styles.dropdown}>
              <View style={{height: 0}} />
              <DropdownMenu
                bgColor={'white'}
                tintColor={'#666666'}
                activityTintColor={'green'}
                handler={(selection,row) => this.setState({pick: data[selection][row]})}
                data={data}
              >
                <View style={styles.user}>
                  { this.state.pick === 'User1' && <User1_photo /> }
                  { this.state.pick === 'User2' && <User2_photo /> }
                  { this.state.pick === 'User3' && <User3_photo /> }
                </View>
              </DropdownMenu>
            </View>
            <View style={styles.postinput}>
              <CommentInput onPress={this._onPress} />
            </View>
          </View>
          <View style={styles.CommentListContainer}>
            <FlatList
              /*inverted*/
              style={styles.CommentList}
              data={list}
              renderItem={({ item }) => <CommentItem {...item} head={this.state.head}/> }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingTop: 40,
    alignItems: 'center',
  },
  dropdownHeader: {
    backgroundColor: '#FFF',
    height: 150,
    width: 400,
    marginBottom:10,
  },
  userHeader: {
    flex:1,
    backgroundColor: '#FFF',
    height: 100,
    width: 400,
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
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
  post: {
    flexDirection: 'row',
    width: 400,
  },
  postinput: {
    flex: 1,
  },
  CommentListContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop:55,
  },
  CommentList: {
    /*transform: [
    { scaleY: -1 },
    ],*/
    paddingLeft: 10,
    paddingRight: 10,
  }
});
