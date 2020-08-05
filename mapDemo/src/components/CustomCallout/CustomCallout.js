import React from 'react';
import useStyle from './useStyle';
import { TouchableOpacity, Text, Image } from 'react-native';

const CustomCallout = ({ title, image }) => {
    const styles = useStyle();

    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(CustomCallout);