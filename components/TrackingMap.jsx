// components/TrackingMap.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const TrackingMap = ({ location, route, tracking }) => {
  return (
    location && (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          {tracking && <Polyline coordinates={route} strokeWidth={5} strokeColor="#9AE200" />}
        </MapView>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '90%',
    height: '75%', // Adjust this value to control how much of the screen the map should take
    borderRadius: 16, // Optional: Adds rounded corners to the map container
    overflow: 'hidden', // Ensures the map respects the borderRadius
    marginTop: 20, // Optional: Adds some margin at the top
    alignSelf: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default TrackingMap;
