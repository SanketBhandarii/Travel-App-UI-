import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface fontType {
  fontType: { bold: string; semiBold: string };
}

const Hero = ({ fontType }: fontType) => {
  return (
    <View className="py-7 ml-7">
      <Text className="text-4xl pb-2" style={{ fontFamily: fontType.bold }}>
        Hi Sanket,
      </Text>
      <Text className="text-xl" style={{ fontFamily: fontType.semiBold }}>
        Explore, Fresh & Thrilling Adventures!
      </Text>
      <View
        className="h-16 bg-slate-200 px-5 mt-4 rounded-lg flex flex-row items-center justify-between"
        style={{ width: wp(90) }}
      >
        <TextInput
          className="text-xl pt-4 font-semibold"
          placeholder="Where are you going?"
          style={{ fontFamily: fontType.semiBold }}
          maxLength={30}
        />
        <TouchableOpacity activeOpacity={0.4}>
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            className="bg-red-200 w-12 h-12 py-2 px-2 items-center justify-center rounded-full"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hero;
