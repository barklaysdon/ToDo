import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Regular, LowShadow, Color } from "../Utiles/variables";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";

class Todo extends Component {
  render() {
    let { title, pressEdit, PressDelete, delKey } = this.props;

    return (
      <View style={styles.Todo}>
        <Text
          style={{
            ...Regular,
            fontSize: 20,
            color: "rgba(0,0,0,0.6)"
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
            onPress={() => pressEdit(delKey, title)}
            key={delKey}
            raised
            buttonStyle={styles.buttonStyle}
            icon={<Icon style={{ ...Color }} name="edit" />}
          />
          <Button
            onPress={() => PressDelete(delKey)}
            buttonStyle={styles.buttonStyle}
            containerStyle={{ marginLeft: 10 }}
            raised
            // type="outline"
            icon={<Icon style={{ color: "red" }} name="trash" />}
          />
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  Todo: {
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 10,
    flexDirection: "row",
    ...LowShadow
  },
  buttonStyle: {
    backgroundColor: "white",
    borderRadius: 15
  }
});

export default Todo;
