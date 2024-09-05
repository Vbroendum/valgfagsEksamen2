// screens/MapScreen.js

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TrackingMap from '../components/TrackingMap';
import SwipeToTrack from '../components/SwipeToTrack';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [tracking, setTracking] = useState(false);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      Location.watchPositionAsync({ accuracy: Location.Accuracy.High, distanceInterval: 1 }, (loc) => {
        setLocation(loc.coords);
        if (tracking) {
          setRoute((prevRoute) => [...prevRoute, { latitude: loc.coords.latitude, longitude: loc.coords.longitude }]);
        }
      });
    })();
  }, [tracking]);

  const handleSwipeComplete = () => {
    setTracking(true);
  };

  const handleStopTracking = () => {
    setTracking(false);
    setRoute([]); // Optional: Clear the route when stopping tracking
  };

  return (
    <View style={styles.container}>
      <TrackingMap location={location} route={route} tracking={tracking} />
      <SwipeToTrack onSwipeComplete={handleSwipeComplete} onStopTracking={handleStopTracking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#000',
  },
});

export default MapScreen;
