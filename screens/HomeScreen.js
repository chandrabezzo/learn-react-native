import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from '../components/header';
import AlbumList from '../components/AlbumList';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}
