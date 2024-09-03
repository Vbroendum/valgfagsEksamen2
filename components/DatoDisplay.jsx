import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import { da } from 'date-fns/locale';

const DatoDisplay = ({ dato }) => {

    const currentDate = new Date();

    const formattedDate = format(currentDate, "EEEE, do MMM", { locale: da });

    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingBottom: 4,
    },
    dateText: {
      fontSize: 20,
      fontWeight: 500,
      color: '#A9A9A9',
    },
  });
  
  export default DatoDisplay;