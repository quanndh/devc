import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: StyleSheet.hairlineColor,
        borderRadius: 2,
        padding: 14,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    taskText: {
        fontSize: 22
    },
    checkbox: {
        width: 32,
        height: 32,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#bcbcbc"
    },
    checkBoxDone: {
        width: 32,
        height: 32,
        borderRadius: 32,
        borderWidth: 0,
        backgroundColor: "#FF958F",
        justifyContent: "center",
        alignItems: "center"
    }
})