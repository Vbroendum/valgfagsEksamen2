import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LatestTrophy = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Seneste Trofæ</Text>
      <View style={styles.largeTrophyCard}>
        <Image source={require('../img/3.png')} style={styles.largeTrophyImage} />
        <Text style={styles.largeTrophyName}>Gående Konge</Text>
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
  largeTrophyCard: {
    width: '80%',
    backgroundColor: '#2B8BE4',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
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
