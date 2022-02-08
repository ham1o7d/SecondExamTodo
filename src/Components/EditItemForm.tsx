import React, { useEffect, useState } from "react";
import { ListItem } from "../@Types/TodoListItem";

interface IProps {
  item: ListItem;
  editItemCallback: (id: number, newValue: string ) => void;
}

export const EditItemForm = ({ item, editItemCallback }: IProps) => {
  const [newValue, setNewValue] = useState<string>(item.text);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const editItem= ()=> {
    if (newValue) {
      editItemCallback(
       item.id,
        newValue
      );
      setErrorMessage("");
      setNewValue("");
    } else {
      setErrorMessage("Pleace, Add valid item!");
    }
    editItemCallback(item.id ,newValue);

  }

  return (
    <div>
      <form>
        <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        <button
          type="button"
          onClick={() => {
            
            editItem()
          }}
        >
          Edit item
        </button>
        {errorMessage && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              fontStyle: "initial",
            }}
          >
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};
