import { Image, Text, TouchableOpacity, View } from "react-native";
import { profilStyle } from "./Profil.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { socialMediaLink } from "../../App";
export function Profil({
  firstName,
  lastName,
  age,
  isOpenToWork,
  onPressTitle,
  onPressSocialMediaIcon,
}: {
  firstName: string;
  lastName: string;
  age: number;
  isOpenToWork: boolean;
  onPressTitle: () => void;
  onPressSocialMediaIcon: (socialMediaUrl: string) => void;
}) {
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
          <TouchableOpacity onPress={onPressTitle}>
            <Text style={{ fontSize: 26, fontWeight: "600" }}>
              Hi {firstName} {lastName} !
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>
            I'm {age} years old. Glad to see you. Grow up my skill with React
            Native and TypeScript.
          </Text>
          <Text
            style={{
              backgroundColor: isOpenToWork ? "green" : "red",
              fontSize: 16,
              fontWeight: "600",
              color: "white",
            }}
          >
            {isOpenToWork ? "I'm looking for a job" : "Not looking to a job"}
          </Text>
        </View>
      </View>
      <View style={profilStyle.social}>
        <TouchableOpacity
          style={profilStyle.social__btn}
          onPress={() => onPressSocialMediaIcon(socialMediaLink.twitter)}
        >
          <AntDesign name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity
          style={profilStyle.social__btn}
          onPress={() => onPressSocialMediaIcon(socialMediaLink.linkedin)}
        >
          <AntDesign name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity
          style={profilStyle.social__btn}
          onPress={() => onPressSocialMediaIcon(socialMediaLink.facebook)}
        >
          <FontAwesome name="facebook-square" size={24} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity
          style={profilStyle.social__btn}
          onPress={() => onPressSocialMediaIcon(socialMediaLink.instagram)}
        >
          <FontAwesome name="instagram" size={24} color="#E4405F" />
        </TouchableOpacity>
        <TouchableOpacity
          style={profilStyle.social__btn}
          onPress={() => onPressSocialMediaIcon(socialMediaLink.github)}
        >
          <FontAwesome name="github" size={24} color="#181717" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
