import { View, Text } from "react-native";
import {
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import Profile from "@/src/components/profile/Profile";

const profile = () => {
  return (
    <View className="min-h-screen bg-[#f3fcfc]">
      <Profile
        fontType={{ semiBold: "Inter_600SemiBold", bold: "Inter_700Bold" }}
      />
    </View>
  );
};

export default profile;
