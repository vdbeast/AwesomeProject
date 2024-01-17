import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native"
import style from './CreatePostsScreen.styled'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";

const CreatePostsScreen = () => {

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');

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
        console.log({ title, location });
        resetData()
    }

    const deletePhotoData = () => {
        resetData()
    }

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardHide}>
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
        </TouchableWithoutFeedback>
    )
}

export default CreatePostsScreen;