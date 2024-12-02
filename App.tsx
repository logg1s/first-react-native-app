import { Platform, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>
          {Platform.isTV ? "Hello TV!" : "Hello Mobile!"}
        </Text>
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>
          {Platform.OS === "android"
            ? "You are using Android"
            : "You are using iOS"}
        </Text>
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>
          {Platform.Version === 31
            ? "You are using Android 12"
            : "You are using Android 11 or below"}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
