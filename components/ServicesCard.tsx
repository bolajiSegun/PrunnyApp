import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function ServicesCard() {
  return (
    <View style={{ marginTop: 40, padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#333", fontSize: 20, fontWeight: "700" }}>
          Services
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "#208220",
              fontSize: 12,
              fontWeight: "400",
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 5,
              backgroundColor: "rgba(30,208,30, 0.1)",
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
      {/* List of services */}
      <View style={{ flexDirection: "row", gap: 20 }}>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.1)",
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: "#333",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 16,
                marginTop: 5,
              }}
            >
              Send Money
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
