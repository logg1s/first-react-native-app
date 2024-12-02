import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Profil } from "./components/Profil/Profil";
import { useState } from "react";
import { Alert, Text } from "react-native";

export default function App() {
  const [clickCount, setClickCount] = useState(0);

  function onClickTitle() {
    setClickCount((prevClickCount) => prevClickCount + 1);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Profil
          age={24}
          firstName="Long"
          lastName="Nguyễn"
          isOpenToWork={true}
          onClickTitle={onClickTitle}
        />
        <Text>You have clicked {clickCount} times on title</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
