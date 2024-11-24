import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Header = () => {
  return (
    <View
      className="flex-row px-7 justify-between"
      style={{
        paddingTop: 30,
        paddingBottom: 10,
        // boxShadow:"0px 0px 20px #E2E8F0"
      }}
    >
      <TouchableOpacity
        className="bg-cyan-500 w-12 h-12 items-center justify-center rounded-lg shadow-lg"
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-400 w-12 h-12 items-center justify-center rounded-full shadow-lg"
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons name="account" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
