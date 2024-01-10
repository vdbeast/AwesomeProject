import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native"
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
                        <View style={style.logout_btn}>
                            <Image
                                source={require('../../assets/log_out.png')}
                                style={style.logout_icon}
                            />
                        </View>
                    </View>
                    <View style={style.profile_wrapper}>
                        <Image
                            source={require('../../assets/user.png')}
                            style={style.image}
                        />
                        <View style={style.name_wrapper}>
                            <Text style={style.name}>Natali Romanova</Text>
                            <Text style={style.email}>email@example.com</Text>
                        </View>
                    </View>
                    <FooterNav />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PostsScreen;