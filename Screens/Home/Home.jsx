import { Button, Keyboard, KeyboardAvoidingView, Platform, Text, Touchable, TouchableOpacity, View } from "react-native"
import style from './Home.styled'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Home = () => {

    const handleKeyboardHide = () => {
        setFocused('');
        Keyboard.dismiss;
    }

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardHide}>
            <View style={style.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={style.fullContainer}>
                    <View style={style.header}>
                        <View style={style.header_wrapper}>
                            <Text style={style.title}>Публікації</Text>
                        </View>
                    </View> 
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Home;