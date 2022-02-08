import React from "react";
import { ListItem } from "../@Types/TodoListItem";
import { TodoListItem } from "./TodoListItem";

interface IProps {
  todolistItems: ListItem[];
  deleteItemCallback: (id: number) => void;
  editItemCallback: (id: number, newValue: string ) => void;
}
export const TodoList = ({
  todolistItems,
  deleteItemCallback,
  editItemCallback,
}: IProps) => {
  return (
    <div>
      <h2>TodoList</h2>
      <ol>
        {todolistItems.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            deleteItemCallback={deleteItemCallback}
            editItemCallback={editItemCallback}
          />
        ))}
      </ol>
    </div>
  );
};
