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
        className="bg-cyan-200 w-14 h-14 items-center justify-center rounded-lg"
        activeOpacity={0.4}
      >
        <MaterialCommunityIcons name="arrow-left" size={33} className="" />
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-200 w-14 h-14 items-center justify-center rounded-full"
        activeOpacity={0.4}
      >
        <MaterialCommunityIcons name="account" size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
