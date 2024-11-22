import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import transportData from "@/data/transportationData";

const Transportation = ({ fontType, dest }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  function handleTransport(index) {
    setActiveIndex(index);
    dest.setRefreshDest(!dest.refreshDest)
  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      className="ml-7"
      data={transportData}
      renderItem={({ item, index }) => {
        const ACTIVE = activeIndex === index;
        return (
          <TouchableOpacity
            className="w-24 mr-4"
            activeOpacity={0.4}
            onPress={() => handleTransport(index)}
          >
            <View
              className="w-24 h-24 rounded-xl justify-center"
              style={{
                backgroundColor:
                  ACTIVE === 0 ? "#045178" : ACTIVE ? "#045178" : item.bgTheme,
              }}
            >
              <MaterialCommunityIcons
                name={item.iconName}
                size={40}
                className="text-center"
                style={{
                  color: ACTIVE === 0 ? "white" : ACTIVE ? "white" : item.color,
                }}
              />
            </View>
            <Text
              style={{ fontFamily: fontType.semiBold }}
              className="text-center pt-1"
            >
              {item.titleName}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Transportation;
