import { Image, Text, TouchableOpacity, View } from "react-native";
import { profilStyle } from "./Profil.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
export function Profil() {
  return (
    <View style={profilStyle.container}>
      <View style={profilStyle.header}>
        <View>
          <Image
            style={profilStyle.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={profilStyle.texts}>
          <Text style={{ fontSize: 26, fontWeight: "600" }}>Hi the DEV !</Text>
          <Text style={{ fontSize: 16 }}>
            Glad to see you. Grow up my skill with React Native and TypeScript
          </Text>
        </View>
      </View>
      <View style={profilStyle.social}>
        <TouchableOpacity style={profilStyle.social__btn}>
          <AntDesign name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={profilStyle.social__btn}>
          <AntDesign name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={profilStyle.social__btn}>
          <FontAwesome name="facebook-square" size={24} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={profilStyle.social__btn}>
          <FontAwesome name="instagram" size={24} color="#E4405F" />
        </TouchableOpacity>
        <TouchableOpacity style={profilStyle.social__btn}>
          <FontAwesome name="github" size={24} color="#181717" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
