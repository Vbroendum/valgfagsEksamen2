import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const TouchButtons = () => {
    const navigation = useNavigation(); 


    const navigateToCalendar = () => {
        navigation.navigate('Calendar'); 
    };

    const navigateToAward = () => {
        navigation.navigate('Award'); 
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToCalendar} style={styles.button}>
                <View style={styles.buttonContainer}>
                    <Icon name="calendar-outline" size={32} color="white" />
                    <Text style={styles.buttonText}>Kalender</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToAward} style={styles.button}>
                <View style={styles.buttonContainer}>
                    <Icon name="trophy-outline" size={32} color="white" />
                    <Text style={styles.buttonText}>Trofæer</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default TouchButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        paddingTop: 75,
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3C3C3C',
        width: '48%',
        padding: 12,
        margin: '1%',
        borderRadius: 8,
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },

    buttonText: {
        color: 'white',
        flexWrap: 'wrap',
        paddingTop: 8,
    }
})