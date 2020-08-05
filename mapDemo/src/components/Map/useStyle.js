import React, { useMemo } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const useStyle = () => {
    return useMemo(() => {
        return StyleSheet.create({
            mapContainer: {
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width
            },
            modalContainer: {
                flex: 1,
                backgroundColor: "black",
                margin: 0,
                alignItems: "center",
                justifyContent: "center"
            },
            close: {
                position: "absolute",
                top: 20,
                left: 10
            },
            closeIcon: {
                color: "white",
                fontSize: "bold",
                fontSize: 20
            },
            modalImage: {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 2
            }
        })
    }, [])
}

export default useStyle;