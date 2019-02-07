import React, { Component } from 'react';
import {
  Dropdown,
} from 'react-native-material-dropdown';
import {
  StyleSheet,
  View,
} from 'react-native';

import User1 from './User1';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state;
  }

  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <View>
        <Dropdown
          onPress={this._onPress}
          style={styles.header}
          label='Favorite Fruit'
          data={data}
        />
        <User1 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
  },
});
