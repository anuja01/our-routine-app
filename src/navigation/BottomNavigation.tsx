import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routines from '../screens/Routines';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const Home: React.FC = React.memo(() => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Routines" component={Routines} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
});

export default Home;
