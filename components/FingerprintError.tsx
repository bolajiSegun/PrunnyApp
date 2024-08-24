import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function FingerprintError({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255, 0.7)",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(250,250,250, 1)",
            borderRadius: 10,
            width: "80%",
            margin: "auto",
          }}
        >
          <View style={{ marginBottom: 40 }}>
            <Image
              source={require("@/assets/images/face-id-real.png")}
              style={styles.image}
            />
            <Text style={styles.notRecognised}>Face Not Recognised</Text>
          </View>

          <View>
            {/* horizontal rule */}
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "rgba(0,0,0,0.05)",
              }}
            ></View>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                alignSelf: "center",
                fontWeight: "500",
                color: "#208220",
                paddingVertical: 5,
              }}
            >
              Try Face ID Again
            </Text>
            {/* horizontal rule */}
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "rgba(0,0,0,0.05)",
              }}
            ></View>

            <TouchableOpacity onPress={onClose}>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  alignSelf: "center",
                  color: "#208220",
                  paddingVertical: 5,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    margin: 0,
    padding: 0,
    alignSelf: "center",
  },
  notRecognised: {
    marginTop: -40,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
  },
});
