import React, {Component} from 'react';
import {Image, ScrollView, View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Header, Left, Right, Button} from 'native-base';
import qlue from '../assets/icon/qlue.png';
import ContentStatus from './content';

export default class Home extends Component {
  state = {
    feature: [1, 2, 3, 4, 5, 6, 7, 8],
    imagesBanner: [
      require('../assets/img/1.png'),
      require('../assets/img/2.png'),
      require('../assets/img/3.png'),
    ],
  };

  render() {
    return (
      <>
        <Header style={{backgroundColor: '#fff'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Image source={qlue} style={styles.header} />
            </Button>
          </Left>
          <Right />
        </Header>
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <SliderBox
              images={this.state.imagesBanner}
              style={styles.boxBanner}
              dotColor="#fff"
              inactiveDotColor="#90A4AE"
              autoplay
              circleLoop
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              paginationBoxStyle={{
                position: 'absolute',
                bottom: 0,
                padding: 0,
                paddingVertical: 10,
              }}
              imageLoadingColor="#0000"
            />
          </View>

          <ScrollView style={styles.wrapper}>
            <ContentStatus />
            <ContentStatus />
            <ContentStatus />
            <ContentStatus />
          </ScrollView>
        </View>
        
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
  },
  bannerContainer: {
    height: 150,
    width: 330,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    elevation: 10,
  },
  boxBanner: {
    height: 150,
    width: 330,
    borderRadius: 10,
    elevation: 10,
  },
  header: {
    // tintColor: '#fff',
    width: 90,
    height: 50,
    left: 5,
    position: 'absolute',
    zIndex: 0,
  },
  wrapper: {
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
