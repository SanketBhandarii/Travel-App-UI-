import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import destination from "@/data/destinations";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Individual = () => {
  const [data, setData] = useState<string | null>(null);
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      const filtered = destination.find((item) => item.id == Number(id));
      if (filtered) {
        setData(filtered.description);
      } else {
        console.error("No matching destination found for id:", id);
        setData("Description not found.");
      }
    } else {
      console.error("No id provided in route params.");
      setData("Invalid ID.");
    }
  }, [id]);

  return (
    <ScrollView className="bg-[#f3fcfc] h-full">
      <View
        className="flex-row px-7 justify-between items-center"
        style={{
          paddingTop: 30,
          paddingBottom: 15,
        }}
      >
        <TouchableOpacity
          className="bg-cyan-500 w-12 h-12 items-center justify-center rounded-lg shadow-lg"
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("(tabs)");
          }}
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

      <View className="mt-8 px-5">
        <Text className="text-2xl font-bold text-[#045178] text-center">
          Destination Details
        </Text>
        <View className="mt-5 bg-white rounded-xl shadow-md p-5">
          <Text className="text-lg font-medium text-gray-700">
            {data ? (
              data
            ) : (
              <Text className="text-red-500 text-center">Loading...</Text>
            )}
          </Text>
        </View>
      </View>

      <View className="mt-10 px-5">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#045178] py-4 rounded-lg shadow-md flex items-center"
          onPress={() => console.log("More Details Pressed")}
        >
          <Text className="text-white font-semibold text-lg">More Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Individual;
