import { View, Text, StyleSheet } from "react-native";
import DatoDisplay from "./DatoDisplay";

const name = "Kasper";

const Greetings = () => {
    return (
        <View style={styles.container}>
            <DatoDisplay />
            <Text style={styles.text}>Hej, {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 12,
        marginBottom: 24,
    },
    text: {
        fontSize: 24,
        color: 'white',
    }
})

export default Greetings;