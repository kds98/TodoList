import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; //아이콘 라이브러리

const TodoListItem = ({ textValue, id, checked, onRemove, onCheck }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onCheck(id)}>
        {checked ? ( // 체크 버튼 누를 시 체크 됐다가 풀렸다가 하는 동작
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={30} color="#caa6fe" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text
        // checked값이 true면 Todo에 취소선 표시
        style={[styles.text, checked ? styles.strikeText : styles.unstrikeText]}
      >
        {textValue}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(id)}>
          <Icon name="delete" size={30} color="#caa6fe" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    flex: 5,
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#caa6fe",
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: "#bbb",
    textDecorationLine: "line-through",
  },
  unstrikeText: {
    color: "#29323c",
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
