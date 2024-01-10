import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    fullContainer: {
        flex: 1
    },
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    background: {
        height: '100%'
    },
    contentWrapper: {
        backgroundColor: '#fff',
        marginTop: 147,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: '100%',
        display: 'flex',
    },
    avatarWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    addPhotoImg: {
        top: '-40%',
        margin: 0
    },
    logout_btn: {
        marginTop: -85,
        marginLeft: "auto",
        marginRight: 10
    },
    logout_icon: {
        width: 24,
        height: 24
    },
    title: {
        fontStyle: 'normal', 
        fontWeight: 500,  
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        color: '#212121',
        marginBottom: 24,
        marginTop: 40
    },
})

export default style;