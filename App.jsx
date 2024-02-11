import {NavigationContainer} from '@react-navigation/native';

// Navigation Imports
import NativeStackNavigation from './src/navigation/NativeStackNavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigation />
      {/* <BottomTabNavigation /> */}
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
