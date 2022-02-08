import React, { useState } from "react";
import { ListItem } from "../@Types/TodoListItem";

export const AddItemForm = ({
  AddItemCallback,
}: {
  AddItemCallback: (item: ListItem) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const AddItemSubmit = (value: string) => {
    if (value) {
      AddItemCallback({
        text: value,
        id: Math.random() * 1000,
      });
      setErrorMessage("");
      setInputValue("");
    } else {
      setErrorMessage("Pleace, Add valid item!");
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form>
        <input
          type={"text"}
          value={inputValue}
          placeholder="Add new item ..."
          onChange={(e) => setInputValue(e.target.value)}
        />
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
        <button type="button" onClick={() => AddItemSubmit(inputValue)}>
          Add Item
        </button>
      </form>
    </div>
  );
};
