import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from "react-native";
import style from "./LoginScreen.styled";
import backgroundImg from "../assets/background.png";

const LoginScreen = () => {
    return <View style={style.container}>
        <ImageBackground source={backgroundImg} style={style.background}>
            <View style={style.contentWrapper}>
                <Text style={style.title}>Увійти</Text>
                <TextInput style={style.input} placeholder="Адреса електронної пошти" />
                <View style={style.passwordWrapper}>
                    <TextInput style={style.input} placeholder="Пароль" />
                    <TouchableOpacity style={style.btnShow}>
                      <Text style={style.showPasswordTitle}>Показати</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.loginBtn}>
                    <Text style={style.loginBtnTitle}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.link}>
                    <Text style={style.linkText}>Немає акаунту? Зареєструватися</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>  
    </View>
}

export default LoginScreen;