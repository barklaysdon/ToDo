import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Font } from "expo";
import Main from "./src/index";

export default class App extends React.Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    Font.loadAsync({
      Regular: require("./assets/Fonts/SairaExtraCondensed-Regular.ttf"),
      Bold: require("./assets/Fonts/SairaExtraCondensed-Bold.ttf"),
      Light: require("./assets/Fonts/SairaExtraCondensed-Light.ttf")
    }).then(() => {
      this.setState({
        isReady: true
      })
    }
     
    );
  }

  render() {
    return this.state.isReady && <Main />;
  }
}
