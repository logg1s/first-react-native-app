import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Profil } from "./components/Profil/Profil";
import { Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", padding: 20 }}
      ></SafeAreaView>
    </SafeAreaProvider>
  );
}
