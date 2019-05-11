import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/HomeScreen"

const MainNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(MainNavigator);