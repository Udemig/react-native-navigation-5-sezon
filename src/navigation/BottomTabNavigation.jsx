import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Util Imports
import {SCREENS} from '../util/constant';

// Screen Imports
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Package Imports
import {Home, Setting2, Profile, Notification} from 'iconsax-react-native';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // Bütün tabların labellarını gizlemek için kullanılır.
        tabBarShowLabel: false,

        //Active olan tabın rengini değiştirmek için kullanılır.
        tabBarActiveTintColor: '#33f51f',

        // Inactive olan tabın rengini değiştirmek için kullanılır.
        tabBarInactiveTintColor: '#fff',

        // Bottom tab'a style vermek için kullanılır.
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 5,
          borderTopColor: 'blue',
          paddingVertical: 10,
        },

        headerShown: false,
      }}
      initialRouteName={SCREENS.Profile}>
      <Tab.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{
          // Tab'a icon eklemek için kullanılır.
          tabBarIcon: ({focused, color, size}) => (
            <Home color={color} size={focused ? 35 : 25} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'white',
            color: 'red',
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.Notifications}
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Notification color={color} size={focused ? 35 : 25} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Profile color={color} size={focused ? 35 : 25} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Settings}
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Setting2 color={color} size={focused ? 35 : 25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
