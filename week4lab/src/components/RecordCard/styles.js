import { StyleSheet } from 'react-native';
import Colors from '../../constant/Colors';

export default StyleSheet.create({
    container: {
        paddingLeft: "10%",
        height: 120
    },
    info: {
        justifyContent: "center",
        paddingLeft: "15%"
    },
    line: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 6
    },
    iconContainer: {
        position: "absolute",
        height: 80,
        width: 80,
        left: "-13%",
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 40,
        width: 40,
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.secondary
    }
})