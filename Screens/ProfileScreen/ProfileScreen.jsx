import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native"
import style from './ProfileScreen.styled'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import FooterNav from "../../Components/FooterNav/FooterNav";
import backgroundImg from "../../assets/background.png";
import addPhotoImg from "../../assets/addPhoto.png"
import PhotoCardList from "../../Components/PhotoCardList/PhotoCardList";

const ProfileScreen = () => {

    const handleKeyboardHide = () => {
        Keyboard.dismiss;
    }

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardHide}>
            <View style={style.container}>
                <ImageBackground source={backgroundImg} style={style.background}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={style.fullContainer}>
                        <View style={style.contentWrapper}>
                            <View style={style.avatarWrapper}>
                                <Image source={addPhotoImg} style={style.addPhotoImg}/>
                            </View>
                            <View style={style.logout_btn}>
                                <Image
                                    source={require('../../assets/log_out.png')}
                                    style={style.logout_icon}
                                />
                            </View>
                            <Text style={style.title}>Natali Romanova</Text>
                            <PhotoCardList/>
                        </View>
                        <FooterNav />
                    </KeyboardAvoidingView>
                </ImageBackground>  
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProfileScreen;