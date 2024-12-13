import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import destination from "@/data/destinations";
import { Link } from "expo-router";

interface FontType {
  bold: string;
  semiBold: string;
}

interface Dest {
  refreshDest: boolean;
}

interface DestinationProps {
  fontType: FontType;
  dest: Dest;
}

const Destination: React.FC<DestinationProps> = ({ fontType, dest }) => {
  const [reload, setReload] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    setReload(true);
    setTimeout(() => {
      setReload(false);
      fadeIn();
    }, 150);
  }, [dest.refreshDest]);

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      easing: Easing.inOut(Easing.circle),
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="mt-7 ml-7">
      <Text style={{ fontFamily: fontType.semiBold }} className="text-2xl">
        Popular Destinations
      </Text>
      {reload ? (
        <View style={{ height: 240, width: 170 }}></View>
      ) : (
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={destination}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Link href={`/listing/${item.id}`} asChild >
                <TouchableOpacity className="mr-3 mt-4" activeOpacity={0.6}>
                  <Image
                    source={{
                      uri: item.imgurl,
                    }}
                    height={240}
                    width={170}
                    style={{
                      objectFit: "cover",
                      borderRadius: 9,
                    }}
                  />
                  <Text
                    style={{ fontFamily: fontType.semiBold }}
                    className="text-center pt-1 pb-4"
                  >
                    {item.city} ({item.country})
                  </Text>
                </TouchableOpacity>
              </Link>
            )}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default Destination;
