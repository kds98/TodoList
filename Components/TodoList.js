import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onCheck }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(
        (
          todo // todos에 담긴 값을 하나씩 TodoListItem 컴포넌트로 전달
        ) => (
          <TodoListItem
            key={todo.id}
            {...todo}
            onRemove={onRemove}
            onCheck={onCheck}
          /> //경고문구 없애기 위해 id 값도 넘겨줌
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
  },
});

export default TodoList;
