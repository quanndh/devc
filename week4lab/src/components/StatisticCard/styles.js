import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: "30%",
        padding: 14,
        justifyContent: "center",
        backgroundColor: "red",
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
    },
    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "400",
    },
    money: {
        fontWeight: "700",
        fontSize: 16,
        marginTop: 8
    }
})