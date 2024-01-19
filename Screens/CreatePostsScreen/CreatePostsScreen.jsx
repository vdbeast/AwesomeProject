import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native"
import style from './CreatePostsScreen.styled'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');

    const navigation = useNavigation();

    const handleKeyboardHide = () => {
        Keyboard.dismiss();
    }

    const resetData = () => {
        setTitle('');
        setLocation('');
    }

    const submitPhotoData = () => {
        if (!title || !location)
            return console.warn('Заповніть будь-ласка поля')
        navigation.navigate("ProfileScreen", { title, location })
    }

    const deletePhotoData = () => {
        resetData()
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={handleKeyboardHide}>
            <View style={style.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={style.subContainer}>
                    <View style={style.header}>
                        <View style={style.header_wrapper}>
                            <Text style={style.title}>Створити публікацію</Text>
                        </View>
                    </View>
                    <View style={style.contentContainer}>
                        <View style={style.photo_loader_container}>
                            <View></View>
                        </View>
                        <Text style={style.subtitle}>Завантажте фото</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Назва..."
                            value={title}
                            onChangeText={setTitle}
                        />
                        <TextInput
                            style={style.input}
                            placeholder="Місцевість..."
                            value={location}
                            onChangeText={setLocation}
                        />
                        <TouchableOpacity style={style.postBtn} onPress={submitPhotoData}>
                            <Text style={style.postBtnTitle}>Опублікувати</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.footer}>
                        <View style={style.footer_btns}>
                            <TouchableOpacity onPress={deletePhotoData}>
                                <View style={style.delete_btn}>
                                    <Image
                                        source={require('../../assets/trash.png')}
                                        style={{ width: 24, height: 24 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableOpacity>
    )
}

export default CreatePostsScreen;