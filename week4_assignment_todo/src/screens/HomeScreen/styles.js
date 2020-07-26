import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 16
    },
    statistic: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24
    },
    statisticCard: {
        borderRadius: 6,
        width: "49%",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
    },
    statisticTitle: {
        color: "white",
        fontSize: 14
    },
    statisticAmount: {
        color: "white",
        fontSize: 24
    }

})