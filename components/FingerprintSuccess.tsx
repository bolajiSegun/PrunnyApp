import React from "react";
import { Modal, View, Text, Image } from "react-native";

export default function FingerprintSuccess({ visible }: { visible: boolean }) {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
        >
          <Image
            source={require("@/assets/images/FingerprintApproved.gif")}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              alignSelf: "center",
              fontWeight: "400",
              marginVertical: 10,
            }}
          >
            Face ID
          </Text>
        </View>
      </View>
    </Modal>
  );
}
