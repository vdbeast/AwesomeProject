import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from "react-native";
import style from "./RegistrationScreen.styled";
import backgroundImg from "../assets/background.png";
import addPhotoImg from "../assets/addPhoto.png"

const RegistrationScreen = () => {
    return <View style={style.container}>
        <ImageBackground source={backgroundImg} style={style.background}>
            <View style={style.contentWrapper}>
                <View style={style.avatarWrapper}>
                    <Image source={addPhotoImg} style={style.addPhotoImg}></Image>
                </View>
                <Text style={style.title}>Реєстрація</Text>
                <TextInput style={style.input} placeholder="Логін"/>
                <TextInput style={style.input} placeholder="Адреса електронної пошти" />
                <View style={style.passwordWrapper}>
                    <TextInput style={style.input} placeholder="Пароль" />
                    <TouchableOpacity style={style.btnShow}>
                      <Text style={style.showPasswordTitle}>Показати</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.registBtn}>
                    <Text style={style.registBtnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.link}>
                    <Text style={style.linkText}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>  
    </View>
}

export default RegistrationScreen;