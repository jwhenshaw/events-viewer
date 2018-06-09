import { createStackNavigator } from 'react-navigation';

import EventsListView from './src/views/EventsList';

export default createStackNavigator({
  Home: EventsListView,
});
