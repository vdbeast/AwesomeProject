import React, { useEffect, useState, useRef } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import style from "./CreatePostsScreen.styled";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      const galleryPermission =
        await ImagePicker.getMediaLibraryPermissionsAsync();

      setHasCameraPermission(
        status === "granted" && galleryPermission.status === "granted"
      );
    })();
  }, []);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      // Обробка вибору фото з галереї
      console.log(result.uri);
    }
  };

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      // Обробка зробленої фотографії
      console.log(uri);
    }
  };

  const handleKeyboardHide = () => {
    Keyboard.dismiss();
  };

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const resetData = () => {
    setTitle("");
    setLocation("");
  };

  const submitPhotoData = () => {
    if (!title || !location) return console.warn("Заповніть будь-ласка поля");
    navigation.navigate("ProfileScreen", { title, location });
  };

  const deletePhotoData = () => {
    resetData();
  };

  const goBack = () => {
    navigation.goBack();
  };

  const buttonStyle =
    title && location ? style.postBtnActive : style.postBtnPassive;

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleKeyboardHide}>
      <View style={style.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={style.subContainer}
        >
          <View style={style.header}>
            <TouchableOpacity onPress={goBack}>
              <View style={style.back_logo_wrapper}>
                <Image
                  source={require("../../assets/arrow-left.png")}
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
              <Camera
                style={style.camera}
                type={type}
                ref={(ref) => setCameraRef(ref)}
              >
                <View style={style.photoView}>
                  <TouchableOpacity onPress={handleTakePhoto}>
                    <View style={style.photo_logo_wrapper}>
                      <Image
                        source={require("../../assets/camera_grey.png")}
                        style={style.photo_logo}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
            <TouchableOpacity onPress={handleChoosePhoto}>
              <Text style={style.subtitle}>Завантажте фото</Text>
            </TouchableOpacity>
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
                value={location}
                onChangeText={setLocation}
              />
              <Image
                source={require("../../assets/map-pin.png")}
                style={style.placeholder_icon}
              />
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
                    source={require("../../assets/trash.png")}
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
