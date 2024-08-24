import { Tabs } from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,

        tabBarStyle: {
          alignItems: "center",
          height: 70,
          paddingVertical: 15,
        },

        tabBarLabelStyle: {
          marginBottom: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon
            //   name={focused ? "home" : "home-outline"}
            //   color={color}
            // />
            <Feather name="home" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name="clock-rotate-left" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{
                backgroundColor: "#208220",
                color: "#fff",
                padding: 10,
                paddingLeft: 15,
                paddingTop: 15,
                height: 55,
                marginTop: 20,
                width: 55,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 1000,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="credit-card" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="apps" size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
