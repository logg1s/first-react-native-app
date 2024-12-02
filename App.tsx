import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Profil } from "./components/Profil/Profil";
import { useState } from "react";
import { Linking, Text } from "react-native";

export const socialMediaLink = {
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  github: "https://github.com",
};

export default function App() {
  const [clickCount, setClickCount] = useState(0);

  function onClickTitle() {
    setClickCount((prevClickCount) => prevClickCount + 1);
  }

  function onPressSocialMediaIcon(socialMediaUrl: string) {
    Linking.openURL(socialMediaUrl);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Profil
          age={24}
          firstName="Long"
          lastName="Nguyễn"
          isOpenToWork={true}
          onPressTitle={onClickTitle}
          onPressSocialMediaIcon={onPressSocialMediaIcon}
        />
        <Text>You have clicked {clickCount} times on title</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
