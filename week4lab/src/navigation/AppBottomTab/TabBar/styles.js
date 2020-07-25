import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
    },
    tab: {
        flex: 1,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 20
    }
})