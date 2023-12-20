import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    fullContainer: {
        flex: 1
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        height: '100%',
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