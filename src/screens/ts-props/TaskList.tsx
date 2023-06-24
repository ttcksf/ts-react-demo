import React, { useEffect, useState } from "react";
import Task from "./Task";
import { TodoProps } from "../../types/types";

const TaskList = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );

        const json = await response.json();
        setTodos(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <Task date="20230601" title="aaa" /> */}
      {/* APIの場合のProps */}
      {/* {todos.map((todo: { id: number; title: string }) => ( */}
      {/* 型を別のファイルで管理した場合 */}
      {/* {todos.map((todo: TodoProps) => ( */}
      {/* 最後にuseStateにて型定義を移動させた */}
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TaskList;
