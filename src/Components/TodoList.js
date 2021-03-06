import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import WorkItem from "./workItem";
import AddWorkItem from "./AddWorkItem";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import {
  ADD,
  REMOVE,
  SHOW_HIDE,
  SHOW_HIDE_MODAL
} from "../Redux/actions/actions";
console.disableYellowBox = true;
class TodoList extends Component {
  newItem = { workItem: " " };
  removeItem = workItemIndex => {
    Alert.alert("Confirmation", "Voulez-vous vraiment supprimer cette todo ?", [
      {
        text: "Annuler",
        onPress: () => null
      },
      {
        text: "Confirmer",
        onPress: () => {
          const toDoList = this.props.toDoList.slice();
          toDoList.splice(workItemIndex, 1);
          this.props.REMOVE(toDoList);
        }
      }
    ]);
  };

  addNewItem = event => {
    this.newItem.workItem = event.nativeEvent.text;
  };
  editToDo = (workItemIndex, workItem) => {};
  addNewItem2 = event => {
    this.newItem.detail = event.nativeEvent.text;
  };
  addItem = () => {
    if (this.newItem.workItem.length > 3) {
      this.props.ADD({
        workItem: this.newItem.workItem,
        detail: this.newItem.detail
      });
      this.props.SHOW_HIDE_MODAL();
      this.newItem = {};
    } else {
      Alert.alert("Oops! ", "Le titre doit être supérieure a 3 caractères", [
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
                updateTodo={this.editToDo}
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
          <View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignContent: "center",
                  padding: 10
                }}
                title="My Todos"
                onPress={this.props.SHOW_HIDE}
              >
                <View style={styles.buttonContainer}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 18,
                      marginTop: 0,
                      width: 400
                    }}
                  >
                    My Todos{" "}
                  </Text>
                </View>
              </TouchableOpacity>
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
          <Text style={styles.addButtonText}>
            <Ionicons name="md-add" size={40} color="white" />
          </Text>
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
        type: ADD,
        payload: newItem
      });
    },

    REMOVE: updateWorkItemList => {
      dispatch({
        type: REMOVE,
        payload: updateWorkItemList
      });
    },

    SHOW_HIDE: () => {
      dispatch({
        type: SHOW_HIDE
      });
    },
    SHOW_HIDE_MODAL: () => {
      dispatch({
        type: SHOW_HIDE_MODAL
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
