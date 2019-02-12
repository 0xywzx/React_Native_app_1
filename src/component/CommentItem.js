import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from './Button';
import ApplauseButton from './ApplauseButton'
import User1_photo from './User1_photo';
import User2_photo from './User2_photo';
import User3_photo from './User3_photo';

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
  usericon: {
    flexDirection: 'row',
  },
  arrow: {
    fontSize: 20,
  },
  text: {
    color: '#800000',
  },
  deleteButton: {
    backgroundColor: '#800000',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  function:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    flex: 1,
    marginTop: 12,
    textAlign: 'right',
  },
})

const CommentItem = (props) => {
  const {
    text,
    pick,
    head,
    created,
    mainuser,
    subuser,
  } = props;


  return (
    <View style={styles.container}>
      <View style={styles.usericon}>
        { mainuser === 'User1' && <User1_photo /> }
        { mainuser === 'User2' && <User2_photo /> }
        { mainuser === 'User3' && <User3_photo /> }
        <Text style={styles.arrow}>➡︎</Text>
        { subuser === 'User1' && <User1_photo /> }
        { subuser === 'User2' && <User2_photo /> }
        { subuser === 'User3' && <User3_photo /> }
      </View>
      <View style={styles.left}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.function}>
        <ApplauseButton />
        <Text style={styles.date} >
          {created.getFullYear()}/
          {created.getMonth()}/
          {created.getDate()}-
          {created.getHours()}:
          {created.getMinutes()}
        </Text>
      </View>
    </View>
  );
}

export default CommentItem;
