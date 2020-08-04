import React, { useCallback } from 'react'
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native'
import styles from './styles'
import moment from 'moment';
const Post = ({data}) => {

    const onPress = useCallback(() => {
        Linking.canOpenURL(data.url).then(supported => {
            if (supported) {
              Linking.openURL(data.url);
            } else {
              console.log(`Don't know how to open URL: ${url}`);
            }
        })
    }, [data])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Image style={styles.image} source={{uri: data.urlToImage}}/>
            <View style={styles.row}>
                <Text style={styles.boldText}>Source</Text>
                <Text>{data.source.name}</Text>
            </View>
            <Text>{data.content}</Text>
            <View style={styles.row}>
                <Text style={styles.boldText}>Published</Text>
                <Text>{moment(data.publishedAt).format('LLL')}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.btnText}>Read mores</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Post;