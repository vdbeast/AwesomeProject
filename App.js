import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import 'react-native-gesture-handler';
import Home from './Screens/Home/Home';

const MainStack = createStackNavigator();

export default function App() {

  StatusBar.setBarStyle('dark-content')

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerStyle: {height:0}}}/>
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerStyle: { height: 0 } }} />
        <MainStack.Screen name="Home" component={Home} options={{ headerStyle: { height: 0 } }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

