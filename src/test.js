import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Popup from "./Library/Components/Popup";

class Test extends Component {
  state = {
    show: false
  };
  onPressH = () =>
    this.setState({
      show: true
    });

  render() {
    return (
      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text> test </Text>
        <Button title="ok" onPress={this.onPressH} />
        {this.state.show && <Popup />}
      </View>
    );
  }
}

export default Test;
