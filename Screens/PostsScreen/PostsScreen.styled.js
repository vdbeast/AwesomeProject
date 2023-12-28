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
    title: {
        fontSize: 17,
        fontWeight: 500,
        lineHeight: 22,
        padding: 11
    }
})

export default style;