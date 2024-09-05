import { View, Text, StyleSheet, Image } from "react-native";
import DatoDisplay from "./DatoDisplay";

const name = "Kasper";

const Greetings = () => {
    return (    
        <View style={styles.container}>
            <DatoDisplay style={styles.dato} />
            <Text style={styles.text}>Hej, {name}!</Text>
            <Image style={styles.profile} source={require('../img/oliverprofil.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: 24,
    },
    text: {
        fontSize: 24,
        color: 'white',
        width: '60%',
    },
    profile: {
        flexWrap: 'wrap',
        width: 55,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 30,  // This makes the image round
        marginRight: 30,    // Adds some space between text and image
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 5,
        marginLeft: 150,
    }
});

export default Greetings;
