import {
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { View, Text, ScrollView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import Header from "@/src/components/header/Header";
import Hero from "@/src/components/hero/Hero";
import Transportation from "@/src/components/transportations/Transportation";
import Destination from "@/src/components/destinations/Destination";

SplashScreen.preventAutoHideAsync();

const home = () => {
  const [loaded, error] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const [refreshDest, setRefreshDest] = useState(false);

  return (
    <ScrollView className="bg-[#f3fcfc]">
      <Header />
      <Hero
        fontType={{ semiBold: "Inter_600SemiBold", bold: "Inter_700Bold" }}
      />
      <Transportation
        dest={{ refreshDest, setRefreshDest }}
        fontType={{ semiBold: "Inter_600SemiBold", bold: "Inter_700Bold" }}
      />
      <Destination
        dest={{ refreshDest }}
        fontType={{ semiBold: "Inter_600SemiBold", bold: "Inter_700Bold" }}
      />
    </ScrollView>
  );
};

export default home;
