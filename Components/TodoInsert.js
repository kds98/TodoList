import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

const TodoInsert = ({ onAddTodo }) => {
  //TextInput의 텍스트 값을 받아오기 위해 사용
  const [newTodoItem, setNewTodoItem] = useState("");

  //사용자가 입력한 텍스트 값의 변화를 관리하기 위한 메소드
  const todoInputHandler = (props) => {
    setNewTodoItem(props);
  };
  //TodoList 추가해주는 메소드
  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        placeholderTextColor={"#999"}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={"ADD"} color="#ffafb0" onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
