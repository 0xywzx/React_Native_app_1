import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
} from 'react-native';
import Header from './Header';

export default class CommentInput extends Component {
    constructor(props) {
      super(props);
      this.state = {　//this.refから変更
        value: ''
      };
    }

    _onPress = () => {
        if (this.state.value.length < 0) { //提出前に修正
          Alert.alert('Alert', '5文字以上で入力してください');
        return;
      }
        this.props.onPress(this.ref._lastNativeText);
        this.ref.setNativeProps({ text: '' });
    }

    render() {
        const {
            onPress,
        } = this.props;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    ref={(ref) => { this.ref = ref; }}
                    placeholder="+1 ありがとうございます！ ＃"
                    multiline={true}
                    value={this.state.value}
                    onChangeText={(value) => this.setState({value})}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onPress}
                >
                    <Text style={styles.buttonText}>追加</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 5,
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 0,
    height: 100,
  },
  button: {
    flex: 1,
    backgroundColor: '#008080',
    marginTop: 70,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 5,
    height: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  }
});
