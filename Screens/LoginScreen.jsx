import { Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import style from "./LoginScreen.styled";
import backgroundImg from "../assets/background.png";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState(false);

    const navigation = useNavigation();

    const clearForm = () => {
        setEmail('');
        setPassword('');
    };

    const onLogin = () => {
        if (!email.trim() || !password.trim())
            return console.warn('Заповніть будь-ласка поля')
        console.log({ email, password });

        handleKeyboardHide();
        clearForm();
    }

    const handleFocus = (currentFocusInput = '') => {
        setFocused(currentFocusInput)
    };

    const handleKeyboardHide = () => {
        setFocused('');
        Keyboard.dismiss;
    }

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardHide}>
            <View style={style.container}>
                <ImageBackground source={backgroundImg} style={style.background}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={style.fullContainer}>
                        <View style={style.contentWrapper}>
                            <Text style={style.title}>Увійти</Text>
                            <TextInput style={{ ...style.input, borderColor: focused === 'email' ? '#ff6c00' : '#e8e8e8', backgroundColor: focused === 'email' ? '#ffffff' : '#f6f6f6' }}
                                placeholder="Адреса електронної пошти"
                                value={email}
                                onChangeText={setEmail}
                                onFocus={()=>handleFocus('email')}
                            />
                            <View style={style.passwordWrapper}>
                                <TextInput style={{ ...style.input, borderColor: focused === 'password' ? '#ff6c00' : '#e8e8e8', backgroundColor: focused === 'password' ? '#ffffff' : '#f6f6f6' }}
                                    placeholder="Пароль"
                                    value={password}
                                    onChangeText={setPassword}
                                    onFocus={() => handleFocus('password')}
                                />
                                <TouchableOpacity style={style.btnShow}>
                                    <Text style={style.showPasswordTitle}>Показати</Text>
                                </TouchableOpacity>
                            </View>                  
                            <TouchableOpacity style={style.loginBtn} onPress={onLogin}>
                                <Text style={style.loginBtnTitle}>Увійти</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.link} onPress={() => navigation.navigate("Registration")}>
                                <Text style={style.linkText}>Немає акаунту? Зареєструватися</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>  
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen;