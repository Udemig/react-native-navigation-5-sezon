import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen Imports
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import HelpScreen from '../screens/HelpScreen';

// Util Imports
import {SCREENS} from '../util/constant';

//Package Imports
import {ShoppingCart, Setting2} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

// Nested Navigation için Import
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();
const {
  Home,
  Notifications,
  Profile,
  Settings,
  Cart,
  About,
  Help,
  Contact,
  TabNavigation,
} = SCREENS;

const NativeStackNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        // Header'ı gizlemek için kullanılır.
        // headerShown: false,

        // Header'a style vermek için kullanılır.
        // headerStyle: {
        //   backgroundColor: 'tomato',
        // },

        // Header title'ın rengini değiştirmek için kullanılır.
        headerTintColor: 'green',

        // Header title'ın style'ını değiştirmek için kullanılır.
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: '900',
        },

        // Header'ın sağ tarafına bir element eklemek için kullanılır.
        // headerRight: () => (
        //   <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
        //     <ShoppingCart color="blue" size={30} />
        //   </TouchableOpacity>
        // ),

        // Header'ın sol tarafına bir element eklemek için kullanılır.
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.navigate(Settings)}>
        //     <Setting2 color="tomato" size={30} />
        //   </TouchableOpacity>
        // ),

        // Header'ın geri butonunu gizlemek için kullanılır.
        headerBackVisible: false,

        // Header'ın geri butonunun title'ını gizlemek için kullanılır.
        // headerBackTitleVisible: false,

        // Header'ın geri butonunun title'ını değiştirmek için kullanılır.
        // headerBackTitle: 'Geri',
      }}
      // Uygulamaya ilk giriş yapıldığı zaman kullanıcıyı hangi sayfada karşılayacağımızı belirler.
      initialRouteName={TabNavigation}>
      <Stack.Screen name={TabNavigation} component={BottomTabNavigation} />
      <Stack.Screen name={About} component={AboutScreen} />
      <Stack.Screen name={Contact} component={ContactScreen} />
      <Stack.Screen name={Help} component={HelpScreen} />
      <Stack.Screen name={Cart} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigation;
