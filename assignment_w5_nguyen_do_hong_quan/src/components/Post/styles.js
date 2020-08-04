import { StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        borderColor: '#bebebe',
        borderRadius: 4,
        borderWidth: 1,
        width: '100%',
        marginVertical: 10,
        padding: 12
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 240,
        alignSelf: 'center',
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        marginVertical: 4
    },
    boldText: {
        fontWeight: 'bold',
        marginRight: 4
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'blue',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 14
    }
})