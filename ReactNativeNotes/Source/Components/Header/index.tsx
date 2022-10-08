import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "../Icon";
import { useNavigation } from "@react-navigation/native";

interface IHeader {
  withBack?: boolean;
}

const Index = ({ withBack }: IHeader) => {
  const nav = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {withBack && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => nav.goBack()} style={{ width: 50 }}>
            <Icon name="caret-back-outline" size={22} />
          </TouchableOpacity>
        </View>
      )}
      <Text
        style={{
          fontWeight: "bold",
          marginRight: 10,
          color: "orange",
        }}
      >
        Notes App
      </Text>
      <Icon name="document-text-outline" color={"orange"} size={20} />
    </View>
  );
};

export default Index;
