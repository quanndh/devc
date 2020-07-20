import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9ebee',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: "100%",
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    choicesContainer: {
        margin: 10,
        borderWidth: 2,
        shadowRadius: 5,
        paddingVertical: 50,
        borderColor: 'grey',
        shadowOpacity: 0.90,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { height: 5, width: 5 },
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
    modalContent: {
        height: "50%",
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        alignItems: 'center',
        padding: 18,
        justifyContent: "center"
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    },
    modalInput: {
        borderWidth: StyleSheet.hairlineWidth,
        width: "100%",
        fontSize: 16,
        textAlign: "center",
        borderRadius: 5,
        marginBottom: 16
    },
    modalButton: {
        backgroundColor: "blue",
        padding: 12,
        borderRadius: 5,
        width: "80%",
    },
    modalButtonDisable: {
        backgroundColor: "#fff",
        borderColor: "#bcbcbc",
        borderWidth: 1,
    },
    modalButtonText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    },
    modalButtonTextDisable: {
        color: "#bcbcbc"
    }


})