import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.accountDetails}>
        <View>
          <Image
            source={require("@/assets/images/account-image.png")}
            style={styles.image}
          />
          <Text
            style={{
              position: "absolute",
              backgroundColor: "#EEDC5B",
              fontSize: 9,
              padding: 1,
              alignSelf: "flex-end",
              borderRadius: 1000,
              fontWeight: "900",
              borderColor: "#fff",
              borderWidth: 1,
              zIndex: 100,
              top: -8,
            }}
          >
            +2
          </Text>
        </View>
        <View>
          <Text style={styles.accountHeaderText}>Hi, Damilare</Text>
          <Text>How are you today?</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Ionicons
            name="moon-sharp"
            size={15}
            color="#1C1C1E"
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="bell-o"
            size={15}
            color="#1C1C1E"
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  accountDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 5,
    paddingHorizontal: 10,
  },
  icons: {},
  accountHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 33,
    height: 33,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#ffffff",
    marginLeft: 10,
    marginTop: -2,
    overflow: "hidden",
  },
});
