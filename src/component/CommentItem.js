import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from './Button';
import ApplauseButton from './ApplauseButton'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
  },
  text: {
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#800000',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

const CommentItem = (props) => {
  const {
    text,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text} >{text}</Text>
      </View>
      <ApplauseButton />
    </View>
  );
}

export default CommentItem;
