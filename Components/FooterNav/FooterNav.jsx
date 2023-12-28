import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from './FooterNav.styled'
import SvgUri from "react-native-svg-uri";
import { useNavigation } from "@react-navigation/native";


const FooterNav = () => {

    const navigation = useNavigation();

    const ButtonsScreen = () => (
        <View style={style.footer}>
            <TouchableOpacity onPress={() => navigation.navigate("PostsScreen")}>
                {/* <SvgUri
    width="32"
    height="32"
    // source={require('../../assets/grid.svg')}
  /> */}
                <Text>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CreatePostsScreen")}>
                <Text>Button 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Button 3 pressed')}>
                <Text>Button 3</Text>
            </TouchableOpacity>
        </View>
    );

    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator tabBar={() => null} style={{backgroundColor: "#fff"}}>
            <Tab.Screen name="Buttons" component={ButtonsScreen} options={{ headerStyle: { height: 0 } }}/>
        </Tab.Navigator>
    )
}

export default FooterNav