import React, { Component } from "react";
import { View, Text } from "react-native";
import { Regular, LowShadow, Color } from "../Utiles/variables";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";

class Todo extends Component {
  render() {
    let { title } = this.props;
    return (
      <View
        style={{
          borderRadius: 30,
          backgroundColor: "white",
          marginBottom: 10,
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
          marginHorizontal: 10,
          flexDirection: "row",
          ...LowShadow
        }}
      >
        <Text
          style={{
            ...Regular,
            fontSize: 18
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Button
            raised
            buttonStyle={{
              backgroundColor: "white"
            }}
            icon={<Icon style={{ ...Color }} name="edit" />}
          />
          <Button
            buttonStyle={{
              backgroundColor: "red"
            }}
            containerStyle={{ marginLeft: 10 }}
            raised
            icon={<Icon style={{ color: "white" }} name="trash" />}
          />
        </View>
      </View>
    );
  }
}

export default Todo;
