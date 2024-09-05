import React from 'react';
import { ScrollView, Share, StyleSheet } from 'react-native';
import LatestTrophy from '../components/LatestTrophy';
import TrophyGrid from '../components/TrophyGrid';
import MissingTrophyGrid from '../components/MissingTrophyGrid';
import ShareButton from '../components/ShareButton';

const TrophyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <LatestTrophy />
      <TrophyGrid />
      <MissingTrophyGrid />
      <ShareButton/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  // Dark background
  },
});

export default TrophyScreen;
