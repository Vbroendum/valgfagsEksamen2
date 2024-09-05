import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AwardScreen from './screens/AwardScreen';
import MapScreen from './screens/MapScreen';




  const Stack = createNativeStackNavigator();

  function StackNavigator() {
    return (
       <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen} 
            options={{ title: 'Hjem', headerShown: false, headerStyle: { backgroundColor: 'black'}}}
            />
          <Stack.Screen
           name="Award"
          component={AwardScreen} 
          options={{ title: '', headerShown: true, headerStyle: { backgroundColor: 'black'}}}/>
          <Stack.Screen 
            name="Map"
            component={MapScreen}
            options={{title: '',  headerShown: true, headerStyle: { backgroundColor: 'black'}}}
            />
        </Stack.Navigator>
    )
  }
  
export default function App() {

  return (
    <NavigationContainer>
      <StatusBar/>
      <StackNavigator/>
    </NavigationContainer>
  );
}


