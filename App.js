import React from "react";
import { StyleSheet, View, Image } from "react-native";
import TodoList from "./src/Components/TodoList";
import { Provider } from "react-redux";
import store from "./src/Redux/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("./src/assests/img/egenie.png")}
            />
          </View>
          <TodoList />
        </View>
      </Provider>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 40
  },
  header: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "white"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  }
});
