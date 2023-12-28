import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        height: 83,
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 31,
        padding: 10,
        backgroundColor: "#fff"
    }
})

export default style;