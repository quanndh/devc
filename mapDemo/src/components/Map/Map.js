import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import useStyle from './useStyle';
import CustomCallout from '../CustomCallout/CustomCallout';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const imageData = [
    "https://thecodehotel.vn/wp-content/uploads/2019/06/Restaurant-3-1024x683.jpg",
    "https://thecodehotel.vn/wp-content/uploads/2019/06/Restaurant-1.jpg",
    "https://thecodehotel.vn/wp-content/uploads/2019/06/Restaurant-2.jpg",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7U_HVGRsqTkDfnRDp6Dy4dByO-xmxjGV2OQ&usqp=CAU"
]

const Map = ({ lat, long, onReady }) => {
    const styles = useStyle();

    const [markers, setMarkers] = useState([]);

    const [showBox, setShowBox] = useState(false);
    const [selectedMarket, setSelectedMarker] = useState({})

    const getMarker = async () => {
        let oldMarker = await AsyncStorage.getItem("markers");
        oldMarker = oldMarker != null ? JSON.parse(oldMarker) : [];
        setMarkers(oldMarker);
    }

    useEffect(() => {
        getMarker()
    }, [])

    const handleLongPress = async (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        let image = Math.floor(Math.random() * 5)
        await AsyncStorage.setItem('markers', JSON.stringify([...markers, {
            latitude,
            longitude,
            isFocus: false,
            title: `Marker ${markers.length + 1}`,
            image: imageData[image]
        }]))
        setMarkers([...markers, {
            latitude,
            longitude,
            isFocus: false,
            title: `Marker ${markers.length + 1}`,
            image: imageData[image]
        }])

    }

    const handleFocusMarker = selected => {
        let temp = [...markers];
        temp = temp.map((item, index) => {
            if (selected === index) {
                if (item.isFocus) {
                    setSelectedMarker(item);
                    setShowBox(true)
                } else {
                    item.isFocus = true
                }
            } else {
                item.isFocus = false
            }
            return item;
        })
        setMarkers(temp)
    }

    return (
        <>
            <Modal
                animationType="slide"
                visible={showBox}
                style={{ margin: 0 }}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => setShowBox(false)} style={styles.close}>
                        <Text style={styles.closeIcon}>X</Text>
                    </TouchableOpacity>
                    <Image
                        resizeMode="contain"
                        style={styles.modalImage}
                        source={{ uri: selectedMarket.image }}
                    />
                </View>
            </Modal>
            <MapView
                onMapReady={() => onReady()}
                onLongPress={handleLongPress}
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                style={styles.mapContainer}
            >
                {
                    markers.length > 0 ? markers.map((item, index) => {
                        return (
                            <MapView.Marker
                                key={index}
                                coordinate={{
                                    latitude: item.latitude,
                                    longitude: item.longitude,
                                }}
                                onPress={() => handleFocusMarker(index)}
                            >
                                {
                                    item.isFocus ? <CustomCallout title={item.title} image={item.image} /> : null
                                }
                            </MapView.Marker>
                        )
                    }) : null
                }
            </MapView>
        </>
    )
}

export default Map;