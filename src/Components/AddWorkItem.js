import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";

const addWorkItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.popUpBox}>
        <View style={styles.popUpBoxItem}>
          <Text style={styles.action}>title:</Text>
          <TextInput
            style={styles.input}
            placeholder="ex : Conférence Mercredi à 15h"
            underlineColorAndroid="black"
            onChange={props.inserWorkItem}
            placeholderTextColor="white"
          />
          <Text style={styles.action}>Détail:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="black"
            onChange={props.inserDetail}
            placeholder="ex :Aws Submit 2020"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.actionBox}>
          <TouchableOpacity onPress={props.cancel}>
            <Text style={styles.cancel}>Retour</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.save}>
            <Text style={styles.save}>Enregister</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height: Dimensions.get("screen").height,
    flex: 2,
    marginBottom: 100
  },
  popUpBox: {
    backgroundColor: "#ccc",
    width: "95%",
    top: "5%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  popUpBoxItem: {
    height: 140,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  input: {
    width: "80%",
    left: 10,
    color: "black",
    fontSize: 15,
    height: 40
  },
  actionBox: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 20
  },
  cancel: {
    color: "red",
    fontSize: 20,
    borderColor: "white"
  },
  save: {
    color: "#fff",
    fontSize: 20
  }
});
export default addWorkItem;
