import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header, Left, Button, Right} from 'native-base';
import back from '../assets/icon/back.png';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <>
        <Header style={{backgroundColor: '#fff'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('login')}>
              <Image source={back} style={styles.header} />
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('mainmenu')}>
              <Text style={styles.title}>NEXT</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          <Button
            title="Submit"
            onPress={() => this.props.navigation.navigate('home')}
          />
          <TouchableOpacity style={styles.baseText}>
            <Text>
              Forgot Something?
              <Text style={styles.innerText}> Reset Password</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    textAlign: 'center',
    width: 300,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
  baseText: {
    marginTop: 0,
  },
  innerText: {
    fontWeight: 'bold',
  },
  header: {
    tintColor: '#1D75D1',
    width: 40,
    height: 20,
    left: 5,
    position: 'absolute',
    zIndex: 0,
  },
  title: {
    color: '#1D75D1',
    fontSize: 20,
  },
});
