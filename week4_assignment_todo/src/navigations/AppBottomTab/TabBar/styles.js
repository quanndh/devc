import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
        backgroundColor: "#FF958F",
        justifyContent: "space-between"
    },
    middleContainer: {
        position: 'absolute',
        bottom: 10, // space from bottombar
        width: "100%",
        height: "100%",
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigButton: {
        height: 68,
        width: 68,
        borderRadius: 68,
        backgroundColor: "#FF958F",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
        zIndex: 2
    },
    tab: {
        flex: 1,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        marginHorizontal: "12.5%",
    },
    label: {
        fontSize: 16
    }
})