import { TouchableOpacity, Text } from "react-native";
import React from "react";

interface IItemlist {
  title: string;
  note: string;
  onPress: () => void;
}

const Index = ({ title, note, onPress }: IItemlist) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        marginHorizontal: 5,
        flexWrap: "wrap",
        flex: 1,
        borderRadius: 5,
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 14,
          marginBottom: 5,
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#666",
          textAlign: "justify",
        }}
        numberOfLines={4}
        ellipsizeMode="tail"
      >
        {note}
      </Text>
    </TouchableOpacity>
  );
};

export default Index;
