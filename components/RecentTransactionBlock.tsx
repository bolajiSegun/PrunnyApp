import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function RecentTransactionBlock() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 8,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: 8,
          }}
        >
          <Ionicons
            name="paper-plane-outline"
            size={14}
            color="black"
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              width: 34,
              height: 34,
              backgroundColor: "rgba(30,208,30, 0.1)",
              borderRadius: 1000,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#333",
                marginBottom: 3,
              }}
            >
              Grace Ameh
            </Text>
            <Text style={{ color: "#666", fontSize: 10 }}>
              15 Oct 2022, 10:00PM
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#cc0000",
              marginBottom: 3,
            }}
          >
            -10,000
          </Text>
          <Text style={{ color: "#666", fontSize: 10 }}>NGN102,238.71</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 0.75,
          borderBottomColor: "#B7B7B0",
          marginVertical: 10,
          opacity: 0.4,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: 8,
          }}
        >
          <Ionicons
            name="paper-plane-outline"
            size={14}
            color="black"
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              width: 34,
              height: 34,
              backgroundColor: "rgba(30,208,30, 0.1)",
              borderRadius: 1000,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#333",
                marginBottom: 3,
              }}
            >
              Mike Oshadami
            </Text>
            <Text style={{ color: "#666", fontSize: 10 }}>
              15 Oct 2022, 10:00PM
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#208220",
              marginBottom: 3,
            }}
          >
            +45,000
          </Text>
          <Text style={{ color: "#666", fontSize: 10 }}>NGN102,238.71</Text>
        </View>
      </View>
    </View>
  );
}
