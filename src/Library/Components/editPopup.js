import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { Shadow, Bold, Regular } from "../Utiles/variables";

class EditPopup extends Component {
  render() {
    let {
      onApplyPress,
      onCancelPress,

      inputValue,
      onChangeValue
    } = this.props;
    return (
      <View style={Pop.PopupOpacity}>
        <View style={Pop.Popupstyle}>
          <Text
            style={{
              marginBottom: 20,
              ...Bold,
              fontSize: 20
            }}
          >
            Edit your goal
          </Text>
          <Input
            placeholder={inputValue}
            value={inputValue || this.props.baseValue.name}
            onChangeText={onChangeValue}
            inputStyle={{
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 10,
              ...Regular
            }}
            inputContainerStyle={{
              marginBottom: 20,
              borderBottomColor: "rgba(0,0,0,0)"
            }}
          />
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Button
              onPress={onCancelPress}
              titleStyle={{
                ...Regular,
                fontSize: 20
              }}
              buttonStyle={{
                marginRight: 20,
                paddingHorizontal: 35,
                borderRadius: 6,
                ...Shadow,
                paddingVertical: 1
              }}
              title="cancel"
            />
            <Button
              onPress={onApplyPress}
              titleStyle={{
                ...Regular,
                fontSize: 20
              }}
              buttonStyle={{
                paddingHorizontal: 35,
                paddingVertical: 1,
                borderRadius: 6,
                ...Shadow
              }}
              title="Edit"
            />
          </View>
        </View>
      </View>
    );
  }
}

Pop = StyleSheet.create({
  PopupOpacity: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center"
  },
  Popupstyle: {
    // marginTop: "40%",
    width: "80%",
    height: 200,
    // marginHorizontal: "10%",
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default EditPopup;
