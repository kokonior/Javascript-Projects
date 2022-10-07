import { View, Pressable, TextInput } from "react-native";
import React, { useRef } from "react";
import Icon from "../Icon";

interface ISearchBar {
  search: string;
  onChangeText: (text: string) => void;
}

const Index = ({ search, onChangeText }: ISearchBar) => {
  const inputRef = useRef<TextInput>(null);

  const focusInput = () => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#eaeaea",
        width: "100%",
        padding: 5,
        alignItems: "center",
        marginTop: 20,
        borderRadius: 5,
      }}
    >
      <Pressable onPress={focusInput}>
        <Icon color={"#777"} name="search" size={18} />
      </Pressable>
      <TextInput
        ref={inputRef}
        style={{ padding: 5, marginLeft: 5, flex: 1 }}
        placeholder="search notes"
        placeholderTextColor={"#666"}
        value={search}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Index;
