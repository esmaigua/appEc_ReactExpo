
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {

  const handlePress = () => {
    Alert.alert(
      "¡Vamos España!",
      "Apoyando a la selección española de fútbol",
    );
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Selección Española de Fútbol</Text>

      <Image
        source={require("../../assets/images/logoEspana.png")}
        style={styles.homeLogo}
      />

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Confederación:</Text> European Football Association (UEFA)
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Entrenador actual:</Text> De la Fuente, Luis Enrique
          Beccacece
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Estadio:</Text> Estadio Santiago Bernabeu (Madrid)
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>¡Alentar a España!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#e20c28",
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },
  splashText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFCC00",
  },
  homeContainer: {
    flex: 1,
    backgroundColor: "#e20c28",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  homeLogo: {
    width: 160,
    height: 200,
    resizeMode: "cover",
    marginBottom: 30,
    borderRadius: 10,
  },
  infoCard: {
    backgroundColor: "#6e1121",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    color: "#ffffff",
    lineHeight: 28,
  },
  boldText: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#FFCC00",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#00205B",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
