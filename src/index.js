import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Header } from "./Library/Components/header";
import Todo from "./Library/Components/Todo";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";

const HW = 55;
class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F0F2F4"
        }}
      >
        <Header header="To Do List" />
        <View
          style={{
            paddingTop: 15,
            height: "77%"
          }}
        >
          <FlatList
            data={[
              { key: "a", title: "im gonna take my bath" },
              { key: "b", title: "gonna learn react native" },
              { key: "c", title: "i got to sleep" },
              { key: "d", title: "i gotta eat food" },
              { key: "e", title: "i have to kill andy baabo" },
              { key: "f", title: "got to kill gym" },
              { key: "g", title: "movies" },
              { key: "h", title: "movies" },
              { key: "o", title: "sleeping" },
              { key: "j", title: "sleeping" }
            ]}
            renderItem={data => <Todo title={data.item.title} />}
          />
        </View>

        <View
          style={{
            flex: 1,
            height: 100,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            buttonStyle={{
              width: HW,
              height: HW,
              borderRadius: HW / 2
            }}
            containerStyle={{
              width: HW,
              height: HW,
              borderRadius: HW / 2,
              marginBottom: 60,
              backgroundColor: "#F0F2F4"
            }}
            raised
            icon={<Icon name="plus" style={{ fontSize: 25, color: "white" }} />}
          />
        </View>
      </View>
    );
  }
}

export default Main;
