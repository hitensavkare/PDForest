import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button } from '@components';
import styles from './styles/Login.styles'
class Login extends Component {

  render() {
    return(
      <View style={{flex:1}}>
        <Button buttonStyle={styles.buttonStyle} text="test"/>
      </View>
    );
  }
}
export default Login;
