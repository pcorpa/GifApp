import { useState, type ChangeEvent, type FormEvent } from "react";

interface AddInputValueProps {
  onNewValue: (value: string) => void;
}

export const AddInputValue = ({ onNewValue }: AddInputValueProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewValue(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresa tu nombre viajero"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};
