import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import 'react-native-gesture-handler';

const MainStack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Registration" component={RegistrationScreen}/>
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

