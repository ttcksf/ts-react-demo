import React from "react";
import { TodoProps } from "../../types/types";

// const Task = (props: { date: string; title: string }) => {
// APIの場合のProps
// const Task = (props: { title: string }) => {
// 型を別のファイルで管理した場合
// const Task = (props: TodoProps) => {
// 分割代入した場合
const Task = ({ title }: TodoProps) => {
  return (
    <div>
      {/* <p>{props.date}</p>
      <p>{props.title}</p> */}
      {/* 型を別のファイルで管理した場合 */}
      {/* <p>{props.title}</p> */}
      {/* 分割代入した場合 */}
      <p>{title}</p>
    </div>
  );
};

export default Task;
