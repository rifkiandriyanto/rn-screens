import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {
  
  Left,
  Right,
  Button,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';
import like from '../assets/icon/like.png';

import comment from '../assets/icon/comment.png';

export default function ContentStatus() {
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://img.alinea.id/img/content/2020/02/24/66193/dilema-pengamen-ondel-ondel-hidup-mengganggu-mati-tak-mau-L9gugHewWz.jpg',
              }}
            />
            <Body>
              <Text>NativeBase</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                'https://i.guim.co.uk/img/media/809770557b918b34c343cd604aa786851cd54512/0_79_3900_2340/master/3900.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8455feb15a2428783b5e616ce3329c11',
            }}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Image source={like} style={styles.icon} />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Image source={comment} style={styles.icon} />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
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
  icon: {
    width: 20,
    height: 20,
  },
});
