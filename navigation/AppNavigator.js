import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default createAppContainer(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  MainNavigator,
);

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
});