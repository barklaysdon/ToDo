import React, { Component } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { Header } from "./Library/Components/header";
import Todo from "./Library/Components/Todo";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Popup from "./Library/Components/Popup";
import EditPopup from "./Library/Components/editPopup";
import uuid1 from "uuid/v1";

const HW = 55;
class Main extends Component {
  state = {
    showeditPop: false,
    showaddPop: false,
    title: "",
    edit: { key: "", name: "" },

    data: []
  };

  addPopup = () => {
    this.setState({
      showaddPop: !this.state.showaddPop
    });
  };
  editPopup = (delKey, title) => {
    const { showeditPop } = this.state;
    this.setState({
      showeditPop: !showeditPop,
      edit: {
        key: delKey,
        name: title
      }
    });
  };
  // apply when create new to do
  Validate = () => {
    const { data, title, edit } = this.state;

    let todo = {
      key: uuid1(),
      title: title
    };
    if (todo.title.length >= 3 && todo.title !== edit.name) {
      const newData = [...data, todo];

      this.setState({ data: newData, showaddPop: false });
    }
  };

  // delete todo on click
  deleteTodo = key => {
    const { data } = this.state;
    const filtrer = data.filter(el => el.key !== key);

    this.setState({
      data: filtrer
    });
  };

  EditTodo = () => {
    const { data, title, edit } = this.state;

    if (title && title !== edit.name) {
      const UpdateData = data.map(el => {
        if (el.key === edit.key) {
          el.title = title;
        }
        return el;
      });

      this.setState({
        data: UpdateData,
        showeditPop: false
      });
    }
  };

  // apply when edit todo
  // EditTodo = key => {
  //   const { data, title } = this.state;
  //   // let todo = {
  //   //   key: uuid1(),
  //   //   title: title
  //   // };

  //   const newData = [...data];

  //   const filtrer = newData.splice(newData.indexOf(key), 1, todo);

  //   this.setState({ data: filtrer, showeditPop: false });
  // };

  render() {
    const { data, title } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F0F2F4"
        }}
      >
        {this.state.showeditPop && (
          <EditPopup
            onCancelPress={this.editPopup}
            onApplyPress={this.EditTodo}
            onChangeValue={title => this.setState({ title })}
            inputValue={title}
            baseValue={this.state.edit}
          />
        )}
        {this.state.showaddPop && (
          <Popup
            onCancelPress={this.addPopup}
            onApplyPress={this.Validate}
            onChangeValue={title => this.setState({ title })}
            inputValue={title}
          />
        )}

        <Header header="To Do List" />
        <View
          style={{
            paddingTop: 15,
            height: "77%"
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Todo
                delKey={item.key}
                title={item.title}
                pressEdit={this.editPopup}
                PressDelete={this.deleteTodo}
              />
            )}
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
            // key={refbutton}
            onPress={this.addPopup}
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
