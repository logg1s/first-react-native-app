import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function AgeCounter() {
  const [age, setAge] = useState<number>(24);
  function increaseAge() {
    setAge((prev) => prev + 1);
  }
  function decreaseAge() {
    setAge((prev) => prev - 1);
  }
  return (
    <View>
      <Text style={{ fontSize: 24 }}>I'm {age} years old</Text>
      <TouchableOpacity
        onPress={increaseAge}
        style={{ backgroundColor: "#399fff" }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>Increase age</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={decreaseAge}
        style={{ backgroundColor: "#ff2002" }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>Decrease age</Text>
      </TouchableOpacity>
    </View>
  );
}
