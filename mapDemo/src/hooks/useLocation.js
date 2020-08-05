import Geolocation from '@react-native-community/geolocation';
import React, { useState, useEffect, useCallback } from 'react';

const useLocation = () => {
    const oneDegreeOfLongitudeInMeters = 111.32
    const circumference = (40075 / 360)

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [latDelta, setLatDelta] = useState(0);
    const [longDelta, setLongDelta] = useState(0);

    const getLatLong = useCallback(() => {
        Geolocation.getCurrentPosition(info => {
            let { latitude, longitude } = info.coords;
            setLat(latitude)
            setLong(longitude);
            const latDelta = (1 / (Math.cos(latitude) * circumference));
            const lonDelta = (1 / oneDegreeOfLongitudeInMeters);
            setLatDelta(latDelta);
            setLongDelta(lonDelta);
        });
    }, [])
    useEffect(() => {
        getLatLong()
    })

    return [lat, long, latDelta, longDelta];
}

export default useLocation;