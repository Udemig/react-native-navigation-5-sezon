import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {SCREENS} from '../util/constant';

const AboutScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 20}}
        onPress={() => navigation.navigate(SCREENS.Notifications)}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Tab Navigation içindeki Notifications Screen'e Git
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'black', padding: 10, borderRadius: 20}}
        onPress={() =>
          navigation.navigate(SCREENS.TabNavigation, {
            screen: SCREENS.Notifications,
          })
        }>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Tab Navigation içindeki Notifications Screen'e Git
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AboutScreen;
