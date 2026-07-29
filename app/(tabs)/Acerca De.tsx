
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {

  return (
    <View style={styles.homeContainer}>

      <View style={styles.infoCard}>
        <Text style={styles.title}>Acerca de</Text>
        <Text style={styles.infoText}>Quien desarrolló esta aplicación:</Text>
      </View>

      <View style={styles.infoCard}>
        <Image
          source={require("../../assets/images/presentacion.jpeg")}
          style={styles.homeLogo}
        />
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Nombre:</Text> Erick Saul Maigua Sarabino
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Rol:</Text> Estudiante de la Carrera de Sistemas de Información
        </Text>
      </View>
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
    alignItems: "center",
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
