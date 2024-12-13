import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const _layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarLabelStyle: { display: "none" },
          tabBarStyle: {
            height: 70,
            paddingTop: 10,
            paddingHorizontal: 20,
            borderTopWidth: 0,
            elevation: 0,
          },
          animation:"fade",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className=" h-16 w-16 items-center justify-center mt-3">
                  <MaterialCommunityIcons
                    name="home"
                    size={33}
                    style={{ color: focused ? "#454545" : "#c8c8c8" }}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="h-16 w-16 items-center justify-center mt-3">
                  <MaterialCommunityIcons
                    name="earth"
                    size={31}
                    style={{ color: focused ? "#454545" : "#c8c8c8" }}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="h-16 w-16 items-center justify-center mt-3">
                  <MaterialCommunityIcons
                    name="calendar-account-outline"
                    size={31}
                    style={{ color: focused ? "#454545" : "#c8c8c8" }}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="h-16 w-16 items-center justify-center mt-3">
                  <MaterialCommunityIcons
                    name="account"
                    size={31}
                    style={{ color: focused ? "#454545" : "#c8c8c8" }}
                  />
                </View>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
