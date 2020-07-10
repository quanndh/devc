import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "700"
    },
    input: {
        borderWidth: 1,
        width: "90%",
        marginVertical: 20,
        borderColor: "lightblue",
        fontSize: 32,
        padding: 4,
        textAlign: "center",
        borderRadius: 4
    },
    focusInput: {
        borderWidth: 4
    }
})