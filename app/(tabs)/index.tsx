import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: "none" } });

    const timer = setTimeout(() => {
      setShowSplash(false);
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../../assets/images/logoEcuadorS.png")}
          style={styles.splashLogo}
        />
        <Text style={styles.splashText}>Seleccion Ecuatoriana</Text>
      </View>
    );
  }

  const handlePress = () => {
    Alert.alert(
      "¡Vamos La Tri!",
      "Apoyando a la selección en su camino a la gloria.",
    );
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Selección Ecuatoriana de Fútbol</Text>

      <Image
        source={require("../../assets/images/logoEcuadorS.png")}
        style={styles.homeLogo}
      />

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Confederación:</Text> CONMEBOL
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Entrenador actual:</Text> Sebastián
          Beccacece
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Estadio:</Text> Estadio Rodrigo Paz
          Delgado (Quito)
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>¡Alentar al Equipo!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#003DA5",
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
    backgroundColor: "#00205B",
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
    backgroundColor: "#113983",
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
