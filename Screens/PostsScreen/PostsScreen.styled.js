import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: "100%",
        height: "100%"
    },
    contentContainer: {
        flex: 1,
        position: 'relative'
    },
    header: {
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex'
    },
    header_wrapper: {
        marginTop: 44,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, 
    logout_btn: {
        marginTop: -35,
        marginLeft: "auto",
        marginRight: 10
    },
    logout_icon: {
        width: 24,
        height: 24
    },
    profile_wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 60,
        height: 60
    },
    name: {
        fontSize: 13,
        fontWeight: 700,
        lineHeight: 15,
        color: "rgba(33, 33, 33, 1)"
    },
    email: {
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 13,
        color: "rgba(33, 33, 33, 0.8)"
    },
    title: {
        fontSize: 17,
        fontWeight: 500,
        lineHeight: 22,
        padding: 11
    }
})

export default style;