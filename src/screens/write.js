import React, {Component} from 'react';
import {
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

export class Write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileUri: this.props.route.params.fileUri,
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{uri: this.state.fileUri}}
                style={{height: 250, width: 250, flex: 1}}
              />
            </CardItem>
            <Container style={{margin: 10}}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Write youre description ..."
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                style={styles.input}
              />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('mainmenu');
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </Container>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Write;

const styles = StyleSheet.create({
  images: {
    width: 250,
    height: 250,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 350,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    alignSelf: 'stretch',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#01B0B7',
    borderRadius: 10,
  },
});
