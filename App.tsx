import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Profil } from "./components/Profil/Profil";
import { Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Profil firstName="Long" lastName="Nguyen">
          <Text>12312 12312321321</Text>
        </Profil>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
