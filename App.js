import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AwardScreen from './screens/AwardScreen';
import CalendarScreen from './screens/CalendarScreen';


  const Stack = createNativeStackNavigator();

  function StackNavigator() {
    return (
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Hjem', headerShown: false }}/>
          <Stack.Screen name="Award" component={AwardScreen} options={{ title: '', headerShown: true }}/>
          <Stack.Screen name="Calendar" component={CalendarScreen} options={{title: '',  headerShown: true }}/>
        </Stack.Navigator>
    )
  }
  
export default function App() {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}


