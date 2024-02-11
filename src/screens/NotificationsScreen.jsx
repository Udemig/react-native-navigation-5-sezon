import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const NotificationsScreen = ({route, navigation}) => {
  // Uygulama hangi telefonda açılırsa o telefonun ekran ölçülerini alır.
  const {width, height} = Dimensions.get('screen');
  return (
    <SafeAreaView>
      <Text>{route?.params?.title}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 20,
          marginTop: 15,
        }}
        onPress={() => navigation.goBack()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Bir screen geri git
        </Text>
      </TouchableOpacity>

      <View
        style={{
          width: width * 0.2,
          height: height * 0.3,
          backgroundColor: 'yellow',
        }}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
