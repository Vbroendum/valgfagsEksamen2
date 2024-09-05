import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TrophyGrid = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Dine Trofæer</Text>
      <View style={styles.trophyWrapper}>
        <View style={styles.trophyGrid}>
          <View style={[styles.trophyCard, styles.blueBackground]}>
            <Image source={require('../img/2.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>7-dages Streak</Text>
          </View>
          <View style={[styles.trophyCard, styles.greenBackground]}>
            <Image source={require('../img/3.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>30-dages Streak</Text>
          </View>
          <View style={[styles.trophyCard, styles.greenBackground]}>
            <Image source={require('../img/4.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>Marathon</Text>
          </View>
          <View style={[styles.trophyCard, styles.blueBackground]}>
            <Image source={require('../img/5.png')} style={styles.trophyImage} />
            <Text style={styles.trophyName}>Gående Konge</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 16,
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
    backgroundColor: '#444',
  },
  trophyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  trophyCard: {
    width: '45%',
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
  blueBackground: {
    backgroundColor: '#2B8BE4',
  },
  greenBackground: {
    backgroundColor: '#3AB071',
  },
  
  
});

export default TrophyGrid;
