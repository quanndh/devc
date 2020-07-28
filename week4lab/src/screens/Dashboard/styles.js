import { StyleSheet } from 'react-native';
import Colors from "../../constant/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: Colors.background,
    },
    statistic: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 12
    },
    totalMoney: {
        alignItems: "center"
    },
    totalText: {
        fontSize: 36,
        color: Colors.primary
    },
    title: {
        fontSize: 20,
        marginBottom: 12
    },
    subtitle: {
        fontSize: 14,
        color: Colors.secondary
    }
})