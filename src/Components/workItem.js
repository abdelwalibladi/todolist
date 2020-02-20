import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { bold } from "ansi-colors";
const workItem = props => {
  const [iscompleted, setIsCompleted] = useState(false);

  const handleCompleted = () => {
    setIsCompleted(iscompleted => !iscompleted);
  };

  const detail = props.detail;

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handleCompleted}>
        <View
          style={[
            styles.circle,
            iscompleted ? styles.completedCircle : styles.uncompletedCircle
          ]}
        ></View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.workItem,
            iscompleted ? styles.completedText : styles.uncompletedText
          ]}
        >
          {props.workItem && (
            <Text style={{ color: "red", fontWeight: "bold" }}>Titre: </Text>
          )}
          {props.workItem}
        </Text>
        <Text
          style={[
            styles.detail,
            iscompleted ? styles.completedText : styles.uncompletedText
          ]}
        >
          {props.detail && (
            <Text style={{ color: "red", fontWeight: "bold" }}>Détail: </Text>
          )}
          {props.detail}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          name="delete"
          size={30}
          color="red"
          onPress={props.removeItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "80%",
    marginTop: 16,
    alignSelf: "center",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ccc",
    flexDirection: "row"
  },
  workItem: {
    marginLeft: 10,
    flex: 1,
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 10
  },
  detail: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 15,
    marginVertical: 10
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  uncompletedText: {
    color: "#353839"
  }
});
export default workItem;
