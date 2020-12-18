import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import bg from '../assets/img/bg.png';
import usericon from '../assets/icon/user.png';
import qlue from '../assets/img/qlue.jpeg';
import fb from '../assets/icon/fb.png';
import google from '../assets/icon/google.png';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Login extends Component {
  loginUser = () => {
    this.props.navigation.navigate('login-form');
  };
  render() {
    return (
      <>
        <StatusBar backgroundColor="#1D75D1" />

        <KeyboardAvoidingView behavior={'position'} style={loginStyle.fill}>
          <Image source={bg} style={loginStyle.accent1} />
          <View style={loginStyle.accent1} />
          <View style={loginStyle.accent2}>
            <View style={loginStyle.titleWrapper}>
              <Image source={qlue} style={loginStyle.title} />
            </View>
            <View style={loginStyle.formWrapper}>
              <View style={loginStyle.inputWrapper}>
                <TouchableOpacity
                  style={loginStyle.btnSignin}
                  onPress={this.loginUser}>
                  <View style={loginStyle.iconWrapper}>
                    <Image source={usericon} style={loginStyle.usericon} />
                  </View>
                  <Text style={loginStyle.btnText}>Log In with Username</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={loginStyle.btnSignin}
                  onPress={this.loginUser}>
                  <View style={loginStyle.iconWrapper}>
                    <Image source={fb} style={loginStyle.usericon} />
                  </View>
                  <Text style={loginStyle.btnText}>Login With Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={loginStyle.btnSignin}
                  onPress={this.loginUser}>
                  <View style={loginStyle.iconWrapper}>
                    <Image source={google} style={loginStyle.usericon} />
                  </View>
                  <Text style={loginStyle.btnText}>Login With Google</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={loginStyle.btnHelp}
                onPress={this.loginUser}>
                <Text style={loginStyle.btnHelpText}>Need helps?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    );
  }
}

export default Login;

const loginStyle = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    tintColor: '#1D75D1',
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0,
  },
  accent2: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    paddingTop: 50,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    marginTop: 0,
  },
  title: {
    width: 200,
    height: 200,
  },
  formWrapper: {
    width: deviceWidth - 100,
    marginBottom: 100,
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  usericon: {
    tintColor: '#fff',
    width: 18,
    height: 18,
  },
  iconWrapper: {
    left: -30,
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: deviceWidth - 145,
    paddingTop: -1,
  },
  btnSignin: {
    // left: -20,
    marginTop: 20,
    width: deviceWidth - 30,
    height: 60,
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnText: {
    color: 'white',
    letterSpacing: 2,
    left: -40,
  },
  divider: {
    marginTop: 20,
    width: deviceWidth - 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: deviceWidth - 282,
    height: 2,
    backgroundColor: 'white',
  },
  textDivider: {
    color: 'white',
    marginRight: 10,
    marginLeft: 10,
  },
  btnJoin: {
    marginTop: 20,
    width: deviceWidth - 100,
    height: 40,
    backgroundColor: '#06B3BA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnHelp: {
    marginTop: 35,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnHelpText: {
    color: '#fff',
    letterSpacing: 2,
  },
});
