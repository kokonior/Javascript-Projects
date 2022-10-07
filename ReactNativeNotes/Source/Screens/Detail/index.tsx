import {
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Header, Icon } from "../../Components";
import { useRoute, useNavigation } from "@react-navigation/native";

const Index = () => {
  const { index, item, saveCallBack, deleteCallBack } = useRoute()
    .params as IParam;

  const [title, setTitle] = useState(item?.title);
  const [note, setNote] = useState(item?.note);
  const nav = useNavigation();
  const goBack = () => {
    setTimeout(() => {
      nav.goBack();
    }, 20);
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: "#eee",
      }}
    >
      <Header withBack />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "flex-end",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={() => {
            if (Platform.OS === "web") {
              deleteCallBack(index);
              goBack();
              return;
            }
            Alert.alert(
              "Delete Note",
              "Are you Sure Want To Delete This Note ?",
              [
                {
                  text: "No",
                },
                {
                  text: "Yes",
                  style: "destructive",
                  onPress: () => {
                    deleteCallBack(index);
                    goBack();
                  },
                },
              ]
            );
          }}
        >
          <Icon name="trash" size={20} color={"red"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            saveCallBack(
              {
                note,
                title,
              },
              index
            );
            goBack();
          }}
        >
          <Icon name="checkmark-outline" size={25} color={"orange"} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={{
          fontWeight: "bold",
          marginTop: 10,
          borderBottomWidth: 1,
          padding: 10,
        }}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={{
          marginTop: 10,
          padding: 10,
          flex: 1,
          borderWidth: 0,
        }}
        value={note}
        onChangeText={setNote}
        multiline
      />
    </View>
  );
};

export default Index;

interface Iitem {
  title: string;
  note: string;
}

interface IParam {
  item: Iitem;
  index?: number;
  deleteCallBack: (index?: number) => void;
  saveCallBack: (item: Iitem, index?: number) => void;
}
