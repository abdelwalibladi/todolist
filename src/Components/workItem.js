import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

const workItem = props => {
  const [iscompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [todoValue, setToDoValue] = useState("");
  const [isUrgent, setUrgent] = useState(false);
  const handleCompleted = () => {
    setIsCompleted(iscompleted => !iscompleted);
  };
  const startEditing = () => {
    let { workItem } = props.workItem;
    setIsEditing(!isEditing);
    setToDoValue({ todoValue: workItem });
  };

  const finishEditing = () => {
    const { id, updateTodo } = props;
    updateTodo(id, todoValue);
    setIsEditing(false);
  };
  const controlInput = workItem => {
    setToDoValue({ todoValue: workItem });
  };
  const pressMe = () => {
    setUrgent(!isUrgent);
  };

  return (
    <View style={[styles.item, isUrgent ? styles.urgent : styles.notUrgent]}>
      <TouchableOpacity onPress={handleCompleted}>
        <View
          style={[
            styles.circle,
            iscompleted ? styles.completedCircle : styles.uncompletedCircle
          ]}
        ></View>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        {isEditing ? (
          <TextInput
            value={props.workItem}
            style={[
              styles.text,
              styles.input,
              iscompleted ? styles.strikeText : styles.unstrikeText
            ]}
            multiline={true}
            returnKeyType={"done"}
            onBlur={finishEditing}
            onChangeText={controlInput}
          />
        ) : (
          <Text
            style={[
              styles.workItem,
              iscompleted ? styles.completedText : styles.uncompletedText
            ]}
          >
            {props.workItem && (
              <Text style={{ color: "black", fontWeight: "bold" }}>
                Titre:{" "}
              </Text>
            )}
            {props.workItem}
          </Text>
        )}
        {isEditing ? (
          <TextInput
            value={props.detail}
            style={[
              styles.text,
              styles.input,
              iscompleted ? styles.strikeText : styles.unstrikeText
            ]}
            multiline={true}
            returnKeyType={"done"}
            onBlur={finishEditing}
            onChangeText={controlInput}
          />
        ) : (
          <Text
            style={[
              styles.detail,
              iscompleted ? styles.completedText : styles.uncompletedText
            ]}
          >
            {props.detail && (
              <Text
                style={[
                  styles.titre,
                  isUrgent ? styles.urgent : styles.notUrgent
                ]}
              >
                Détail:{" "}
              </Text>
            )}
            {props.detail}
          </Text>
        )}
      </View>
      {isEditing ? (
        <View style={styles.buttons}>
          <TouchableOpacity onPressOut={finishEditing}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>✅</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPressOut={startEditing}>
            <View style={styles.buttonContainer}>
              <Text
                style={[
                  styles.buttonText,
                  iscompleted ? styles.completedEdit : styles.uncompletedEdit
                ]}
              >
                ✏
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.removeItem}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>❌</Text>
            </View>
          </TouchableOpacity>
          {iscompleted === false ? (
            <TouchableOpacity onPress={pressMe}>
              <View style={styles.buttonContainer}>
                <Text
                  style={[
                    styles.hot,
                    isUrgent ? styles.urgent : styles.notUrgent
                  ]}
                >
                  Hot
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "90%",
    marginTop: 16,
    alignSelf: "center",
    borderWidth: 0.4,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row"
  },
  workItem: {
    marginLeft: 10,
    flex: 1,
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10
  },
  input: {
    borderColor: "red",
    borderWidth: 0.2,
    borderRadius: 10,
    margin: 10
  },
  detail: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 15,
    marginVertical: 10
  },
  titre: {
    color: "black",
    fontWeight: "bold"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    alignItems: "center"
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
  },
  rowContainer: {
    flexDirection: "row",
    width: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: "row"
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  completedEdit: {
    display: "none"
  },
  urgent: {
    backgroundColor: "red"
  },
  uncompletedEdit: {
    display: "flex"
  },
  hot: {
    backgroundColor: "yellow"
  }
});
export default workItem;
