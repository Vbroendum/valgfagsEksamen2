import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TrophyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Seneste Trofæ */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Seneste Trofæ</Text>
        <View style={[styles.largeTrophyCard]}>
          <Image source={require('../img/3.png')} style={styles.largeTrophyImage} />
          <Text style={styles.largeTrophyName}>Gående Konge</Text>
        </View>
      </View>

      {/* Dine Trofæer */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dine Trofæer</Text>
        <View style={styles.trophyGrid}>
          {/* 7-dages Streak Trofæ */}
          <View style={[styles.trophyCard, styles.brownBackground]}>
            <Image source={require('../img/2.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>7-dages Streak</Text>
          </View>
          {/* 30-dages Streak Trofæ */}
          <View style={[styles.trophyCard, styles.greenBackground]}>
            <Image source={require('../img/3.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>30-dages Streak</Text>
          </View>
          {/* Marathon Trofæ */}
          <View style={[styles.trophyCard, styles.greenBackground]}>
            <Image source={require('../img/4.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>Marathon</Text>
          </View>
          {/* Gående Konge Trofæ */}
          <View style={[styles.trophyCard, styles.blueBackground]}>
            <Image source={require('../img/5.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>Gående Konge</Text>
          </View>
          {/* Add more trophy cards as needed */}
        </View>
      </View>

      {/* Trofæer du mangler */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trofæer du mangler</Text>
        <View style={styles.trophyGrid}>
          {/* Manglende Trofæ */}
          <View style={[styles.trophyCard, styles.blueBackground]}>
            <View style={styles.missingTrophy} />
            <Text style={styles.trophyName}>Mangler Trofæ</Text>
          </View>
          {/* Add more missing trophy cards as needed */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',  // Dark background
  },
  section: {
    padding: 16,
    alignItems: 'center',  // Center content horizontally
  },
  sectionTitle: {
    fontSize: 20,  // Font size for section titles
    fontWeight: 'bold',
    color: '#FFF',  // White text
    marginBottom: 16,
    textAlign: 'center',
  },
  trophyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  trophyCard: {
    width: '45%',  // Adjust width for two columns
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  trophyImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  trophyName: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  largeTrophyCard: {
    width: '80%',  // Increase width for large card
    backgroundColor: '#2B8BE4',  // Light blue background for large card
    padding: 24,  // Increase padding for a larger card
    borderRadius: 12,  // Slightly larger border radius
    alignItems: 'center',
    marginBottom: 16,
  },
  largeTrophyImage: {
    width: 100,  // Larger image size
    height: 100,
    marginBottom: 12,
  },
  largeTrophyName: {
    fontSize: 20,  // Larger font size for the name
    color: '#FFF',
    textAlign: 'center',
  },
  missingTrophy: {
    width: 60,
    height: 60,
    backgroundColor: '#777',
    marginBottom: 8,
  },
  blueBackground: {
    backgroundColor: '#2B8BE4',  // Light blue background
  },
  greenBackground: {
    backgroundColor: '#3AB071',  // Green background
  },
  brownBackground: {
    backgroundColor: '#2B8BE4',  // Brown background
  },
});

export default TrophyScreen;
