import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    convertBtn: {
        height: 40,
        padding: 10,
        borderRadius: 16,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24
    },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    activeConvertBtn: {
        backgroundColor: "lightblue",
    },
    text: {
        color: "black",
        fontSize: 22
    },
    activeText: {
        color: "white",
    },
    flag: {
        width: 28,
        height: 24,
        marginHorizontal: 8
    }
})