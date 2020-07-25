import { StyleSheet } from 'react-native';
import Colors from "../../../constant/Colors";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16
    },
    info: {
        justifyContent: "space-between",
        paddingVertical: 6
    },
    icon: {
        width: 30,
        height: 30,
    },
    subtitle: {
        color: Colors.secondary
    }
})