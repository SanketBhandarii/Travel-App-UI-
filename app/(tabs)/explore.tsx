import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const explore = () => {
  return (
    <View className="flex-1 bg-[#f3fcfc] px-6 py-8">
      {/* Explore Title */}
      <Text className="text-3xl font-bold text-gray-800">Explore</Text>

      {/* Info Container */}
      <View className="mt-6 bg-white rounded-lg shadow-md p-6">
        <Text className="text-xl font-semibold text-gray-700 mb-4">
          Discover Beautiful Places
        </Text>
        <Text className="text-gray-500 text-base">
          Explore unique destinations around the world. Whether you're looking for
          serene beaches, snowy mountains, or cultural landmarks, we've got a
          perfect place for you to visit.
        </Text>
      </View>

      {/* Explore Button */}
      <TouchableOpacity
        className="mt-6 py-3 px-6 bg-blue-500 rounded-lg shadow-md"
        onPress={() => alert("Explore more destinations!")}
      >
        <Text className="text-white text-center text-lg font-semibold">Explore More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default explore;
