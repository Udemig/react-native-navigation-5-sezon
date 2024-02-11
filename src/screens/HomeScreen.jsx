import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../util/constant';

const HomeScreen = () => {
  const navigation = useNavigation();
  const name = 'Udemig Eğitimine Hoşgeldiniz!';

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10, borderRadius: 20}}
        onPress={() =>
          navigation.navigate(SCREENS.Notifications, {title: name})
        }>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Go to Notifications Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 20}}
        onPress={() => navigation.navigate(SCREENS.Settings)}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Go to Settings Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'green', padding: 10, borderRadius: 20}}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Drawer Navigation'ı Aç
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'green', padding: 10, borderRadius: 20}}
        onPress={() => navigation.navigate(SCREENS.About)}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Go to About Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
