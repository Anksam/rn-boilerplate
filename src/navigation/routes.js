import { createStackNavigator, createAppContainer } from 'react-navigation';
// Load Components
import SplashScreen from '../app/components/splashscreen';
import HomeScreen from '../app/components/homescreen';

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    header: ({state}) => {
      return {title: state.params && state.params.title}
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
