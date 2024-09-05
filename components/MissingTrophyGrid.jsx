import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MissingTrophyGrid = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Trofæer du mangler</Text>
      <View style={styles.trophyWrapper}>
        <ScrollView horizontal={true} style={styles.horizontalScrollView} showsHorizontalScrollIndicator={false}>
          <View style={[styles.trophyCard, styles.blueBackground]}>
            <View style={styles.missingTrophy} />
            <Text style={styles.trophyName}>Mangler Trofæ 1</Text>
          </View>
          <View style={[styles.trophyCard, styles.greenBackground]}>
            <View style={styles.missingTrophy} />
            <Text style={styles.trophyName}>Mangler Trofæ 2</Text>
          </View>
          <View style={[styles.trophyCard, styles.blueBackground]}>
            <View style={styles.missingTrophy} />
            <Text style={styles.trophyName}>Mangler Trofæ 3</Text>
          </View>
          <View style={[styles.trophyCard, styles.greenBackground]}>
            <View style={styles.missingTrophy} />
            <Text style={styles.trophyName}>Mangler Trofæ 4</Text>
          </View>
        </ScrollView>
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
  horizontalScrollView: {
    flexDirection: 'row',
  },
  trophyCard: {
    width: 120,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 16,
  },
  missingTrophy: {
    width: 60,
    height: 60,
    backgroundColor: '#777',
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

export default MissingTrophyGrid;
