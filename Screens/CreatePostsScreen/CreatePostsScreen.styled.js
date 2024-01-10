import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: "100%",
        height: "100%"
    },
    subContainer: {
        flex: 1,
        position: 'relative',
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
    contentContainer: {
        backgroundColor: '#fff',
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 32,
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize: 17,
        fontWeight: 500,
        lineHeight: 22,
        padding: 11
    },
    photo_loader_container: {
        width: "100%",
        height: 240,
        backgroundColor: "rgba(246, 246, 246, 1)",
        borderWidth: 1,
        borderColor: "rgba(232, 232, 232, 1)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 3
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "rgba(189, 189, 189, 1)",
        marginBottom: 32
    },
    input: {
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderColor: "rgba(232, 232, 232, 1)",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "rgba(189, 189, 189, 1)",
        marginBottom: 14
    },
    postBtn: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'rgba(246, 246, 246, 1)',
        borderRadius: 100,
        width: 343,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    postBtnTitle: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "rgba(189, 189, 189, 1)"
    },
    footer: {
        position: "absolute",
        bottom: 0,
        height: 83,
        width: "100%",
        borderTopColor: 'rgba(0, 0, 0, 0.3)',
        padding: 10,
        backgroundColor: "#fff"
    },
    footer_btns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        gap: 31,
    },
    delete_btn: {
        color: "#fff",
        width: 70,
        height: 40,
        backgroundColor: "rgba(246, 246, 246, 1)",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default style;