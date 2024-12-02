import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Profil } from "./components/Profil/Profil";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Profil
          firstName="Long"
          lastName="Nguyen"
          age={100}
          isOpenToWork={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
