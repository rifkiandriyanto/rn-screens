import React, {Component} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {StyleSheet, Image, Alert, TouchableOpacity, Text} from 'react-native';
import {Container, Card, Content, CardItem, Button, View} from 'native-base';

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
      images: '',
    };
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  renderFileUri() {
    if (this.state.fileUri) {
      return (
        <>
          <Image source={{uri: this.state.fileUri}} style={styles.images} />
        </>
      );
    } else {
      return (
        <Image
          source={require('../assets/img/galeryImages.jpg')}
          style={styles.images}
        />
      );
    }
  }

  submit = () => {
    const {fileUri} = this.state;

    if (fileUri !== '') {
      this.props.navigation.navigate('write', {
        fileUri: fileUri,
      });
    } else {
      Alert.alert('Oops!', 'Please take a picture');
    }
  };

  render() {
    return (
      <>
        <Container>
          <Content>
            <Card>
              <CardItem style={styles.wraper}>{this.renderFileUri()}</CardItem>
            </Card>
            <CardItem style={styles.btnSection}>
              <TouchableOpacity onPress={this.launchCamera}>
                <Image
                  source={{
                    uri:
                      'https://user-images.githubusercontent.com/31474001/33522594-4b172f50-d816-11e7-8361-b58ab6fc521c.png',
                  }}
                  style={styles.btnSection}
                />
              </TouchableOpacity>
            </CardItem>
            <View style={{flexDirection: 'row', marginTop: 200}}>
              <TouchableOpacity onPress={this.submit} style={styles.button}>
                <Text style={styles.buttonText}>GOVERMENT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.submit} style={styles.button}>
                <Text style={styles.buttonText}>COMPANIES</Text>
              </TouchableOpacity>
            </View>

            {/* <Button onPress={this.submit}>
                <Text>Goverment</Text>
              </Button> */}
          </Content>

          {/* <View>
            {this.renderFileUri()}
            <Text style={{textAlign: 'center'}}>File Uri</Text>
          </View> */}
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 250,
    height: 250,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    alignSelf: 'center',
    tintColor: '#1D75D1',
    width: 150,
    height: 150,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  wraper: {
    alignSelf: 'center',
  },
  iconWrapper: {
    marginTop: 80,
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'stretch',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    // backgroundColor: '#01B0B7',
    // borderRadius: 10,
    textAlign: 'center',
    width: 200,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    // height: 44,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#01B0B7',
  },
});
