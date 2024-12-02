import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ display: "flex", flex: 1 }}>
        <View style={s.box1}>
          <View
            style={{ height: 50, width: 100, backgroundColor: "red" }}
          ></View>
          <Text style={s.text}>Khá là hay ho</Text>
          <Text style={s.text}>Khá là hay ho</Text>
          <Text style={s.text}>Khá là hay ho</Text>
          <Text style={s.text}>Khá là hay ho</Text>
        </View>
        <View style={s.box2} />
        <View style={s.box3} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
