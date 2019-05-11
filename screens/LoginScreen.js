import React from 'react';
import { Button, StyleSheet, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Login',
  };

  handleLoginPress = () => {
    this.props.navigation.navigate("Home")
  };

  render() {
    return (
        <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            placeholder="Username"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
          />
          <Button title="Login" onPress={this.handleLoginPress} />
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between"
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    },
    textInput: {
        height: 40,
        borderColor: "#FFFFFF",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
      }
  });
