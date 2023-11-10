import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform} from "react-native";
import style from "./RegistrationScreen.styled";
import backgroundImg from "../assets/background.png";
import addPhotoImg from "../assets/addPhoto.png"
import { useState } from "react";

const RegistrationScreen = () => {
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState(false);

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    const onRegistration = () => {
        if (!name || !email|| !password)
            return console.warn('Заповніть будь-ласка поля')
        console.log({ name, email, password });

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
                            <View style={style.avatarWrapper}>
                            <Image source={addPhotoImg} style={style.addPhotoImg}></Image>
                        </View>
                        <Text style={style.title}>Реєстрація</Text>
                        <TextInput style={{ ...style.input, borderColor: focused === 'name' ? '#ff6c00' : '#e8e8e8', backgroundColor: focused === 'name' ? '#ffffff' : '#f6f6f6' }}
                            placeholder="Логін"
                            value={name}
                            onChangeText={setName}
                            onFocus={() => handleFocus('name')}
                        />
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
                        <TouchableOpacity style={style.registBtn} onPress={onRegistration}>
                            <Text style={style.registBtnTitle}>Зареєструватися</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.link}>
                            <Text style={style.linkText}>Вже є акаунт? Увійти</Text>
                        </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>  
                </View>
        </TouchableWithoutFeedback>
    )
}

export default RegistrationScreen;