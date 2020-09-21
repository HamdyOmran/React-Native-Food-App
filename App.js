import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowSCreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator({
  Search : SearchScreen,
  ResultShow: ResultShowSCreen
},
{
  initialRouteName : 'Search',
  defaultNavigationOption : {
    title : 'Business Search'
  }
});

export default createAppContainer(navigator);


