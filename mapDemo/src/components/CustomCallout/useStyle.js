import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyle = () => {
    return useMemo(() => {
        return StyleSheet.create({
            container: {
                backgroundColor: "rgba(255,255,255, 0.7)",
                borderRadius: 8,
                padding: 8,
                alignItems: "center",
                justifyContent: "center"
            },
            title: {
                color: "black",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
            },
            image: {
                height: 80,
                width: 80,
                marginBottom: 6
            }
        })
    }, [])
}

export default useStyle;