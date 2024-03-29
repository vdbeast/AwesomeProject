import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform} from "react-native";
import style from "./RegistrationScreen.styled";
import backgroundImg from "../../assets/background.png";
import addPhotoImg from "../../assets/addPhoto.png"
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    
    const navigation = useNavigation();

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    const onRegistration = () => {
        if (!name || !email|| !password)
            return console.warn('Заповніть будь-ласка поля')
        console.log({ name, email, password });
        
        navigation.navigate("Home");

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

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
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
                        <View style={style.inputWrapper}>
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
                                    secureTextEntry={!showPassword}
                                    placeholder="Пароль"
                                    value={password}
                                    onChangeText={setPassword}
                                    onFocus={() => handleFocus('password')}
                                />
                                    <TouchableOpacity style={style.btnShow} onPress={toggleShowPassword}>
                                        <Text style={style.showPasswordTitle}>
                                            {showPassword ? 'Приховати' : 'Показати'}
                                        </Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={style.registBtn} onPress={onRegistration}>
                            <Text style={style.registBtnTitle}>Зареєструватися</Text>
                        </TouchableOpacity>
                            <View style={style.link_wrapper}>
                                <Text style={style.link_wrapper_text}>Вже є акаунт?&nbsp;</Text>
                                <TouchableOpacity style={style.link} onPress={() => navigation.navigate("Login")}>
                                    <Text style={style.linkText}>Увійти</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>  
                </View>
        </TouchableWithoutFeedback>
    )
}

export default RegistrationScreen;