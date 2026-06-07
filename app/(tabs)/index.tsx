import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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

  // --- PANTALLA 1: SPLASH SCREEN ---
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../../assets/images/logoEcuador.png")}
          style={styles.splashFullScreen}
        />
      </View>
    );
  }

  // --- PANTALLA 2: HOME SCREEN (Información del equipo) ---
  return (
    <View style={styles.homeContainer}>
      <Image
        source={require("../../assets/images/logoEcuadorS.png")}
        style={styles.homeLogo}
      />

      <Text style={styles.title}>Selección Ecuatoriana de Futbol</Text>
      <Text style={styles.subtitle}>"La Tri"</Text>

      <View style={styles.infoCard}>
        <Text style={styles.description}>
          ¡Bienvenidos!{"\n"}Aquí encontrarás la información del equipo que
          representa a todos los ecuatorianos.
        </Text>
      </View>
    </View>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
  splashFullScreen: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  homeContainer: {
    flex: 1,
    backgroundColor: "#00205B",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  homeLogo: {
    width: 200,
    height: 250,
    resizeMode: "cover",
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FBD024",
    marginBottom: 30,
  },
  infoCard: {
    backgroundColor: "#012568",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    width: "80%",
  },
  description: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 24,
  },
});
