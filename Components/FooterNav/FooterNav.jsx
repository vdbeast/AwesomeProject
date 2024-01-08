import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from './FooterNav.styled';
import { useNavigation } from "@react-navigation/native";


const FooterNav = () => {

    const navigation = useNavigation();

    const ButtonsScreen = () => (
        <View style={style.footer}>
            <View style={style.footer_btns}>
                <TouchableOpacity onPress={() => navigation.navigate("PostsScreen")}>
                    <Image
                        source={require('../../assets/grid.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("CreatePostsScreen")}>
                    <View style={style.add_btn}>
                        <Image
                        source={require('../../assets/union.png')}
                        style={{ width: 13, height: 13 }}
                    />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                    <Image
                        source={require('../../assets/user.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
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