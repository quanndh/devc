import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ebee',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    contentContainer: {
        flex: 1,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: 'center',
    },
    itemImage: {
        width: 120,
        height: 100
    },
    itemText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})