import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

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
        className="items-center justify-center rounded-lg shadow-lg"
        activeOpacity={0.7}
      >
        <Image
          source={require("../../../assets/images/Tripzy.png")}
          style={{ height: 45, width: 45, borderRadius: 50 }}
        />
      </TouchableOpacity>
      <Link href={"/profile"} asChild>
        <TouchableOpacity
          className="bg-red-400 w-12 h-12 items-center justify-center rounded-full shadow-lg"
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="account" size={28} color="white" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Header;
