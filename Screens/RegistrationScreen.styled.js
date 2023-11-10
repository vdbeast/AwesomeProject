import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    fullContainer: {
        flex: 1
    },
    container: {
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
    },
    background: {
        height: '100%'
    },
    contentWrapper: {
        backgroundColor: '#fff',
        height: '68%',
        marginTop: 'auto',
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
    title: {
        fontStyle: 'normal', 
        fontWeight: 500,  
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        color: '#212121',
        marginBottom: 24,
    },
    input: {
        height: 50,
        width: 343,
        fontSize: 16,
        padding: 16,
        marginBottom: 16,
        color: '#212121',
        backgroundColor: '#f6f6f6',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    registBtn: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ff6c00',
        borderRadius: 100,
        width: 343,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 14
    },
    link: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnShow: {
        position: 'absolute',
        right: 24,
        padding: 16,
    },
    showPasswordTitle: {
        color: '#1B4371'
    },
    registBtnTitle: {
        color: '#ffffff'
    },
    linkText: {
        color: '#1B4371'
    }
})

export default style;