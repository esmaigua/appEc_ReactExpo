import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

// 1. Añadimos las importaciones necesarias para el Splash Screen y React
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { useColorScheme } from "@/hooks/use-color-scheme";

// 2. Le decimos a Expo que NO oculte el Splash Screen inmediatamente
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // 3. Creamos una variable de estado para controlar el tiempo
  const [isReady, setIsReady] = useState(false);

  // 4. Simulamos los 2 segundos de carga
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  // 5. Cuando pasen los 2 segundos y esté "listo", ocultamos el Splash Screen
  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  // 6. Mientras NO esté listo, retornamos null para que la pantalla siga reteniendo el logo
  if (!isReady) {
    return null;
  }

  // 7. Tu código original se mantiene intacto y se muestra cuando isReady es true
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
