import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <AgeCounter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
