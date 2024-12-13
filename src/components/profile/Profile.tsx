import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

interface FontType {
  fontType: { bold: string; semiBold: string };
}

const Profile = ({ fontType }: FontType) => {
  // Hardcoded user data
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Adventurer exploring the world's hidden gems. Lover of nature, culture, and culinary experiences.",
    stats: {
      trips: 24,
      countries: 12,
      photos: 345,
    },
  };

  return (
    <ScrollView className="bg-[#f5f9fc] flex- mt-16">
      {/* Header Section */}
      <View className="bg-gradient-to-r from-[#0075A2] to-[#00C9C8] rounded-b-2xl items-center justify-center relative">
        <Image
          source={{ uri: userData.avatar }}
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
        />
      </View>

      {/* User Info Section */}
      <View className="items-center">
        <Text
          className={`text-2xl text-gray-800`}
          style={{ fontFamily: fontType.bold }}
        >
          {userData.name}
        </Text>
        <Text
          className={`text-sm text-gray-500 mt-1 `}
          style={{ fontFamily: fontType.semiBold }}
        >
          {userData.email}
        </Text>
      </View>

      {/* Divider */}
      <View className="mt-4 mx-6 h-1 bg-gradient-to-r from-[#0075A2] to-[#00C9C8] rounded-full" />

      {/* Bio Section */}
      <View className="mt-4 px-6">
        <Text
          className="text-lg text-gray-800 mb-2"
          style={{ fontFamily: fontType.bold }}
        >
          About Me
        </Text>
        <View className="bg-white rounded-lg shadow-md p-5">
          <Text
            className="text-gray-600 text-base leading-6"
            style={{ fontFamily: fontType.semiBold }}
          >
            {userData.bio}
          </Text>
        </View>
      </View>

      {/* Stats Section */}
      <View className="mt-6 flex-row justify-between px-6 gap-3">
        {Object.entries(userData.stats).map(([key, value]) => (
          <View
            key={key}
            className="bg-white rounded-lg shadow-lg p-5 flex-1 items-center"
          >
            <Text className="text-3xl font-bold text-[#0075A2]">{value}</Text>
            <Text
              className="text-gray-500 capitalize mt-1 text-sm"
              style={{ fontFamily: fontType.semiBold }}
            >
              {key}
            </Text>
          </View>
        ))}
      </View>

      {/* Buttons Section */}
      <View className="mt-8 px-6">
        <TouchableOpacity
          activeOpacity={0.7}
          className=" py-4 bg-sky-500 rounded-lg shadow-lg mb-4"
        >
          <Text
            className="text-white font-semibold text-lg tracking-wide text-center"
            style={{ fontFamily: fontType.semiBold }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-red-500 py-4 rounded-lg shadow-md"
        >
          <Text
            className="text-white font-semibold text-lg tracking-wide text-center"
            style={{ fontFamily: fontType.semiBold }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
