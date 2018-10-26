import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import { AnimButton, InputField, LinkButton } from '@components';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/Login.styles';
import { images, colors } from '@themes';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      isLogin:false,
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
        <ScrollView>
          { Register.renderLogo() }
          <View style={styles.inputContainer}>
            <InputField
              placeHolder="First name"
              inputStyle={styles.inputStyle}
              onChange={(userName) => { this.setState({ userName }); }}
            />
            <View style={styles.iconContainer}>
              <Icon name="user" size={30} color={colors.colorBorderFont} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <InputField
              placeHolder="Middle name"
              inputStyle={styles.inputStyle}
              onChange={(password) => { this.setState({ password }); }}
            />
            <View style={styles.iconContainer}>
              <Icon name="key" size={30} color={colors.colorBorderFont} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <InputField
              placeHolder="Last name"
              inputStyle={styles.inputStyle}
              onChange={(password) => { this.setState({ password }); }}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              placeHolder="Email address"
              inputStyle={styles.inputStyle}
              onChange={(password) => { this.setState({ password }); }}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              placeHolder="Password"
              inputStyle={styles.inputStyle}
              onChange={(password) => { this.setState({ password }); }}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              placeHolder="Confirm Password"
              inputStyle={styles.inputStyle}
              onChange={(password) => { this.setState({ password }); }}
            />
          </View>

          <View style={styles.inputContainer}>
            <InputField
              placeHolder="Mobile No"
              inputStyle={styles.inputStyle}
              onChange={(password) => { this.setState({ password }); }}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              inputStyle={styles.inputStyle}
              onChange={(password) => { this.setState({ password }); }}
            />
          </View>

          <AnimButton buttonStyle={styles.buttonStyle} isLoginStatus= {this.state.isLogin} onPress={() => {alert('clicked')}} text="REGISTER" />
        </ScrollView>
      </ImageBackground>
    );
  }
}
export default Register;
