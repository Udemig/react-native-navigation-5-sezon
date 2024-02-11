import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
// Util Imports
import {SCREENS} from '../util/constant';

// Screen Imports
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Package Imports
import {Home, Setting2, Profile, Notification} from 'iconsax-react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // Active olan drawer ın rengini belirlemek için kullanılır.
        drawerActiveTintColor: 'lightgreen',

        // Inactive olan drawer ın rengini belirlemek için kullanılır.
        drawerInactiveTintColor: '#fff',

        // Drawer a style vermek için kullanılır.
        drawerStyle: {
          backgroundColor: '#000',
          paddingVertical: 10,
        },

        // Header ı gizlemek için kullanılır.
        headerShown: false,

        // Drawer'ın içindeki tüm itemlara style vermek için kullanılır.
        drawerItemStyle: {
          backgroundColor: 'tomato',
          padding: 10,
          marginVertical: 12,
          borderRadius: 20,
        },

        // Drawer'ın içindeki tüm itemların label'ına style vermek için kullanılır.
        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: '900',
        },

        // Active olan Drawer item ın background rengini belirlemek için kullanılır.
        drawerActiveBackgroundColor: 'gray',

        // Drawer ı çekerek açma ve kapama işlemini kapatmak için kullanılır.
        // swipeEnabled: false,

        // Drawer'ı sürekli olarak açık tutmak için kullanılır.
        // drawerType: 'permanent',

        // Drawer'ı açarken ekranın üstüne gelmesini sağlar. (Ekranı kaydırmaz.)
        // drawerType: 'front',

        // Default olarak gelen değerdir ekranı kaydırarak açar.
        // drawerType: 'slide',

        // Drawer'ı açarken ekranın altına gelmesini sağlar. (Ekranı kaydırır.)
        // drawerType: 'back',

        // Drawer'ın açılma yönünü belirlemek için kullanılır.
        drawerPosition: 'right',
      }}
      // başlangıç ekranını belirlemek için kullanılır.
      initialRouteName={SCREENS.Home}>
      <Drawer.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{
          drawerLabel: ({focused, color, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  color,
                  marginRight: 10,
                  fontSize: 20,
                  fontWeight: '900',
                }}>
                Ana Sayfa
              </Text>
              <Home color={color} size={focused ? 30 : 20} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={SCREENS.Notifications}
        component={NotificationsScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Notification color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <Drawer.Screen name={SCREENS.Profile} component={ProfileScreen} />
      <Drawer.Screen name={SCREENS.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
