import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { TextInput } from 'react-native-gesture-handler';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  static navigationOptions = {
    title: 'Chandra Abdul Fattah',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
      );
  }
}
