import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import WorkItem from "./workItem";
import AddWorkItem from "./AddWorkItem";
import { connect } from "react-redux";
console.disableYellowBox = true;
class TodoList extends Component {
  newItem = { workItem: "" };
  removeItem = workItemIndex => {
    const toDoList = this.props.toDoList.slice();
    toDoList.splice(workItemIndex, 1);
    this.props.REMOVE(toDoList);
  };

  addNewItem = event => {
    this.newItem.workItem = event.nativeEvent.text;
  };

  addNewItem2 = event => {
    this.newItem.detail = event.nativeEvent.text;
  };
  addItem = () => {
    console.log("ok" + typeof this.newItem.workItem);
    if (this.newItem.workItem.length > 3) {
      this.props.ADD({
        workItem: this.newItem.workItem,
        detail: this.newItem.detail
      });
      this.props.SHOW_HIDE_MODAL();
      this.newItem = {};
    } else {
      Alert.alert("Oops! ", "le Titre doit étre supérieure a 3 caractére", [
        { text: "Retour", onPress: () => console.log("alert") }
      ]);
    }
  };

  render() {
    let workItems = null;
    if (this.props.toggleWorkItems) {
      workItems = (
        <>
          {this.props.toDoList.map((toDoList, index) => {
            return (
              <WorkItem
                key={toDoList.id}
                workItem={toDoList.workItem}
                detail={toDoList.detail}
                removeItem={() => this.removeItem(index)}
              />
            );
          })}
        </>
      );
    }

    let addWorkItem = null;
    if (this.props.toggleAddWorkItems) {
      addWorkItem = (
        <AddWorkItem
          cancel={this.props.SHOW_HIDE_MODAL}
          save={this.addItem}
          inserWorkItem={this.addNewItem}
          inserDetail={this.addNewItem2}
        />
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={{ backgroundColor: "white" }}>
            <View style={{ backgroundColor: "red" }}>
              <Button
                title="Voir ma to do list "
                onPress={this.props.SHOW_HIDE}
              />
            </View>
            <ScrollView>
              {workItems}
              {addWorkItem}
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.textStyle}
          onPress={this.props.SHOW_HIDE_MODAL}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
mapStateToProps = state => {
  return {
    toDoList: state.WorkItemList,
    toggleWorkItems: state.ToggleWorkItemList,
    toggleAddWorkItems: state.ToggleAddItems
  };
};
mapDispatchToProps = dispatch => {
  return {
    ADD: newItem => {
      dispatch({
        type: "ADD",
        payload: newItem
      });
    },

    REMOVE: updateWorkItemList => {
      dispatch({
        type: "REMOVE",
        payload: updateWorkItemList
      });
    },

    SHOW_HIDE: () => {
      dispatch({
        type: "SHOW_HIDE"
      });
    },
    SHOW_HIDE_MODAL: () => {
      dispatch({
        type: "SHOW_HIDE_MODAL"
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "red",
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  remove: {
    position: "absolute",
    zIndex: 11,
    right: 300,
    bottom: 90,
    backgroundColor: "red",
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 22,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row"
  }
});
