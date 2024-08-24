import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";
import ServicesCard from "@/components/ServicesCard";

export default function index() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  // This is a simple state management hook for toggling the visibility of the account balance
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  // This is responsible for the copying of the account balance, it uses an expo package called expo-clipoard that allows you to be able to copy text to your device clipboard
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("2040011238");
    Alert.alert("Copied!", "Account number copied to clipboard!");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />

      {/* Hero section of the homepage */}
      <View
        style={{
          backgroundColor: "#208220",
          padding: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
          marginHorizontal: 10,
          marginTop: 20,
          height: 183,
        }}
      >
        <ImageBackground
          source={require("@/assets/images/Union.png")}
          style={{
            width: 202,
            alignSelf: "flex-end",
            height: 183,
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: 10,
          }}
        />
        <View style={{ width: 325 }}>
          <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>
            Savings Account Balance
          </Text>
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            {isBalanceVisible ? "NGN102,238.72" : "•••••••••••"}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Adewole Damilare</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* This section is what's contrling the hide/show balance and aslo this section also contain where you can copy the account balance */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16, marginRight: 10 }}>
                2040011238
              </Text>
              <TouchableOpacity onPress={copyToClipboard}>
                <Ionicons name="copy-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={toggleBalanceVisibility}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#fff", marginRight: 5 }}>
                {isBalanceVisible ? "Hide balance" : "Show balance"}
              </Text>
              <Ionicons
                name={isBalanceVisible ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Services Section */}

      <ServicesCard />

      {/* Recent transactions */}
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
            Recent Transactions
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
      </View>
    </SafeAreaView>
  );
}
