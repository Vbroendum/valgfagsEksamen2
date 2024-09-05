import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LatestTrophy = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Seneste Trofæ</Text>
      <View style={styles.trophyWrapper}>
        <View style={[styles.largeTrophyCard, styles.blueBackground]}>
          <Image source={require('../img/3.png')} style={styles.largeTrophyImage} />
          <Text style={styles.largeTrophyName}>Gående Konge</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  trophyWrapper: {
   
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#444',  // Slightly darker background to mimic the card look
  },
  largeTrophyCard: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
  },
  blueBackground: {
    backgroundColor: '#2B8BE4',  // Light blue background for the image container
    borderRadius: 12,
    padding: 16,
  },
  largeTrophyImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  largeTrophyName: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default LatestTrophy;
