import { View, TouchableOpacity, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon, Header, SearchBar, ItemList } from "../../Components";
import { useNavigation } from "@react-navigation/native";

const SampleData = [
  {
    title: "Welcome",
    note: "Try to write something on this note app 🔥",
  },
  {
    title: "Is This Title ? ",
    note: "so this is must be a note then 👌",
  },
  {
    title: "you can search",
    note: "Go on type something on to the search bar 🕵️‍♀️",
  },
];

const Index = () => {
  const nav = useNavigation() as any;
  const [data, setData] = useState(SampleData);
  const [filter, setFilter] = useState(SampleData);
  const [search, setSearch] = useState("");

  const onSearch = (text: string) => {
    text = text || text.toLowerCase();
    const searchResult = data.filter(
      ({ note, title }) =>
        note.toLowerCase().includes(text) || title.toLowerCase().includes(text)
    );
    setFilter(searchResult);
  };

  useEffect(() => {
    onSearch(search);
  }, [search]);

  const saveCallBack = (item: Iitem, index?: number) => {
    if (index != null) {
      setData((prev) => {
        const newData = prev;
        newData[index] = item;
        setFilter(newData);
        return [...newData];
      });
    } else {
      setData((prev) => {
        const newData = [...prev, item];
        setFilter(newData);
        return [...newData];
      });
    }
  };

  const deleteCallBack = (index?: number) => {
    if (index != null) {
      setData((prev) => {
        const newData = prev;
        newData.splice(index, 1);
        setFilter(newData);
        return [...newData];
      });
    }
  };

  const renderItem = ({ item, index }: IRenderItem) => {
    const onPress = () => {
      nav.navigate("Detail", {
        index,
        item,
        saveCallBack,
        deleteCallBack,
      });
    };
    return <ItemList {...item} onPress={onPress} />;
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: "#eee",
      }}
    >
      <Header />
      <SearchBar search={search} onChangeText={setSearch} />
      <FlatList
        style={{ flex: 1, marginTop: 10 }}
        data={filter}
        renderItem={renderItem}
        numColumns={2}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Nothing to see here</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          nav.navigate("Detail", {
            saveCallBack,
            deleteCallBack,
          });
        }}
        style={{
          alignSelf: "center",
          marginBottom: -5,
        }}
      >
        <Icon name="add-circle" size={45} color={"orange"} />
      </TouchableOpacity>
    </View>
  );
};

export default Index;

interface Iitem {
  title: string;
  note: string;
}

interface IRenderItem {
  item: Iitem;
  index: number | string;
}
