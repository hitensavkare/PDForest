import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image
} from 'react-native';
import { Button, InputField, LinkButton } from '@components';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/Login.styles';
import { images, colors } from '@themes';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
    };
    this.validateUser = this.validateUser.bind(this);
  }

  static renderLogo() {
    return (
      <View>
        <Image source={images.imgPDF} style={styles.logoContainer} />
      </View>
    )
  }

  validateUser(userName, password) {
    this.data = { userName, password };
  }

  render() {
    const { userName, password } = this.state;
    return (
      <ImageBackground style={styles.container} source={images.imgLoginBack}>
        { Login.renderLogo() }
        <View style={styles.inputContainer}>
          <InputField
            inputStyle={styles.inputStyle}
            onChange={(userName) => { this.setState({ userName }); }}
          />
          <View style={styles.iconContainer}>
            <Icon name="user" size={30} color={colors.colorBorderFont} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <InputField
            inputStyle={styles.inputStyle}
            onChange={(password) => { this.setState({ password }); }}
          />
          <View style={styles.iconContainer}>
            <Icon name="key" size={30} color={colors.colorBorderFont} />
          </View>
        </View>

        <Button buttonStyle={styles.buttonStyle} onPress={() => {alert('clicked')}} text="LOGIN" />
        <LinkButton text="Forgot password ?" buttonTextStyles={styles.linkButton} onPress={() => {alert('clicked')}} />
        <LinkButton text="New to the App? Register Here" buttonTextStyles={[styles.linkButton,{fontSize:18}]} onPress={() => {alert('clicked')}} />
      </ImageBackground>
    );
  }
}
export default Login;
