import { StyleSheet, Text, View } from "react-native";
import { Profiles } from "./components/Profiles/Profiles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>App</Text>
        <View>
          <Text style={style.text}>Hello</Text>
        </View>
        <Profiles />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const style = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 200,
    direction: "rtl"
  }
})