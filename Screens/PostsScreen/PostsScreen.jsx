import { Keyboard, KeyboardAvoidingView, Platform, Text, View } from "react-native"
import style from './PostsScreen.styled'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import FooterNav from "../../Components/FooterNav/FooterNav";

const PostsScreen = () => {

    const handleKeyboardHide = () => {
        Keyboard.dismiss;
    }

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardHide}>
            <View style={style.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={style.contentContainer}>
                    <View style={style.header}>
                        <View style={style.header_wrapper}>
                            <Text style={style.title}>Публікації</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={style.title}>Автор</Text>
                    </View>
                    <FooterNav />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PostsScreen;