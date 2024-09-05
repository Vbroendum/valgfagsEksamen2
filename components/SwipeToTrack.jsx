// components/SwipeToTrack.js

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Dimensions, TouchableOpacity } from 'react-native';

const SwipeToTrack = ({ onSwipeComplete, onStopTracking }) => {
  const [isTracking, setIsTracking] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const screenWidth = Dimensions.get('window').width;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => {
      return !isTracking && Math.abs(gestureState.dx) > 10;
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
    onPanResponderRelease: (e, { dx }) => {
      if (dx > screenWidth * 0.6) {
        setIsTracking(true);
        onSwipeComplete();
        Animated.spring(pan, {
          toValue: { x: screenWidth * 0.7 - 60, y: 0 },
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const handleStopTracking = () => {
    setIsTracking(false);
    onStopTracking();
    pan.setValue({ x: 0, y: 0 }); // Reset the pan position
  };

  return (
    <View style={styles.swipeContainer}>
      {isTracking ? (
        <TouchableOpacity style={styles.stopButton} onPress={handleStopTracking}>
          <Text style={styles.stopButtonText}>Stop Track</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.swipeableBackground}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[styles.swipeableCircle, pan.getLayout()]}
          />
          <Text style={styles.swipeText}>Swipe to Track</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  swipeContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeableBackground: {
    width: '80%',
    height: 60,
    backgroundColor: '#DEFAC7',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  swipeableCircle: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#9AE200',
    borderRadius: 25,
    top: 5,
  },
  swipeText: {
    position: 'absolute',
    zIndex: -1,
    fontSize: 18,
    color: '#333',
  },
  stopButton: {
    width: '80%',
    height: 60,
    backgroundColor: '#ff3b30',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SwipeToTrack;
