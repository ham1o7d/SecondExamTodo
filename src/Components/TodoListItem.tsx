import React, { useState } from "react";
import { ListItem } from "../@Types/TodoListItem";
import { EditItemForm } from "./EditItemForm";

interface IProps {
  item: ListItem;
  deleteItemCallback: (id: number) => void;
  editItemCallback: (id: number, newValue: string ) => void;
}
export const TodoListItem = ({
  item,
  deleteItemCallback,
  editItemCallback,
}: IProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div>
      <li> {item.text} </li>{" "}
      <button
        onClick={() => deleteItemCallback(item.id)}
      >
        Remove
      </button>
      <button
        onClick={() => setIsEdit(true)}
      >
        Edit
      </button>
      {isEdit && <EditItemForm editItemCallback={editItemCallback} item={item} />}
    </div>
  );
};
