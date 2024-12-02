import { StyleSheet } from "react-native";

export const profilStyle = StyleSheet.create({
    container: {
        elevation: 10,
        backgroundColor: "white",
        shadowColor: "gray",
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderRadius: 15,
        paddingHorizontal: 5,
    },
    header: {
        flexDirection: "row",
        padding: 15
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    texts: {
        flex: 1,
        paddingLeft: 15
    },
    social: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 15
    },
    social__btn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee"
    }
})