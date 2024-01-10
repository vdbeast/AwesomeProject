import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        height: 83,
        width: "100%",
        borderTopWidth: 1,
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
    add_btn: {
        color: "#fff",
        width: 70,
        height: 40,
        backgroundColor: "rgba(255, 108, 0, 1)",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default style;