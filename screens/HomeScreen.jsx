import { View, StyleSheet, } from "react-native";
import RingProgress from "../components/RingProgress";
import TouchButtons from "../components/TouchButtons";
import Greetings from "../components/Greetings";
import { useState } from 'react';
import DatoDisplay from "../components/DatoDisplay";
import { StatusBar, useColorScheme } from 'react-native';

const STEP_GOAL = 10.000;

export default function HomeScreen() {

  const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
          <Greetings style={styles.greetings}/>
          <RingProgress 
            progress={0}
            textLine2="10000"
          />
          <View style={styles.buttons}>
            <TouchButtons />
          </View>
        </View>
      );
    }


    const styles = StyleSheet.create({
      container: {
      flex: 1,
      paddingTop: 125,
      backgroundColor: 'black',
    },

    calendarButton: {
      bottom: 250,
      display: 'flex',
      justifyContent: 'center',
      borderStyle: 'solid',
      width: '49%',
      padding: 8,
      borderWidth: 1,
      backgroundColor: 'red',
    },

    awardButton: {
      bottom: 250,
      display: 'flex',
      borderStyle: 'solid',
      width: '49%',
      padding: 8,
      borderWidth: 1,
      backgroundColor: 'blue',
  },

});