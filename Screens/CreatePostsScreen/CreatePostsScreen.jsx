import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from './CreatePostsScreen.styled';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const CreatePostsScreen = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [locationInput, setLocationInput] = useState('');
    const [isLocationInputFocused, setLocationInputFocus] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }

            let location = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setLocation(coords);
            setLocationInput(`${coords.latitude}, ${coords.longitude}`);
        })();
    }, []);

    const navigation = useNavigation();

    const handleKeyboardHide = () => {
        Keyboard.dismiss();
    }

    const resetData = () => {
        setTitle('');
        setLocation({ latitude: null, longitude: null });
        setLocationInput('');
    }

    const submitPhotoData = () => {
        if (!title || !location)
            return console.warn('Заповніть будь-ласка поля')
        navigation.navigate("ProfileScreen", { title, location })
    }

    const deletePhotoData = () => {
        resetData()
    }

    const goBack = () => {
        navigation.goBack()
    }

    const buttonStyle = title && location ? style.postBtnActive : style.postBtnPassive;

    return (
        <TouchableOpacity activeOpacity={1} onPress={handleKeyboardHide}>
            <View style={style.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={style.subContainer}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={goBack}>
                            <View style={style.back_logo_wrapper}>
                                <Image
                                    source={require('../../assets/arrow-left.png')}
                                    style={style.back_logo}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={style.header_wrapper}>
                            <Text style={style.title}>Створити публікацію</Text>
                        </View>
                    </View>
                    <View style={style.contentContainer}>
                        <View style={style.photo_loader_container}>
                            <View style={style.photo_logo_wrapper}>
                                <Image
                                    source={require('../../assets/camera_grey.png')}
                                    style={style.photo_logo}
                                />
                            </View>
                        </View>
                        <Text style={style.subtitle}>Завантажте фото</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Назва..."
                            placeholderTextColor={style.placeholderText.color}
                            value={title}
                            onChangeText={setTitle}
                        />
                        <View>
                            <TextInput
                                style={style.input_location}
                                placeholder="Місцевість..."
                                placeholderTextColor={style.placeholderText.color}
                                value={locationInput}
                                onChangeText={setLocationInput}
                                onFocus={() => setLocationInputFocus(true)}
                                onBlur={() => setLocationInputFocus(false)}
                                editable={false}
                            />
                            <Image
                                source={require('../../assets/map-pin.png')}
                                style={style.placeholder_icon}
                            />
                            {isLocationInputFocused && (
                                <MapView
                                    style={{
                                        width: Dimensions.get("window").width,
                                        height: Dimensions.get("window").height,
                                    }}
                                    region={{
                                        ...location,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                    showsUserLocation={true}
                                >
                                    {location && (
                                        <Marker title="I am here" coordinate={location} description="Hello" />
                                    )}
                                </MapView>
                            )}
                        </View>
                        <TouchableOpacity style={buttonStyle} onPress={submitPhotoData}>
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
    );
};

export default CreatePostsScreen;
