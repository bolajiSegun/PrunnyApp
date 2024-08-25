import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
                backgroundColor: "rgba(255,10,30, 0.1)",
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
              Remita
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <AntDesign
              name="copy1"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(205,10,30, 0.3)",
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
              Pay Bills
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Entypo
              name="mobile"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,50,150, 0.1)",
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
              Airtime
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <FontAwesome6
              name="hand-holding-dollar"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(255,155,100, 0.1)",
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
              Loans
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Feather
              name="tv"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(150,8,100, 0.1)",
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
              Cable TV
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Octicons
              name="graph"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,50,150, 0.1)",
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
              Invest
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <FontAwesome6
              name="lightbulb"
              size={24}
              color="black"
              style={{
                padding: 20,
                backgroundColor: "rgba(30,208,30, 0.2)",
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
              Electricity
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
