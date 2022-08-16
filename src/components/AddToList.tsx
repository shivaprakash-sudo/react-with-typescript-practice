import { useState } from "react";
import { ISetPeople } from "../interfaces/ISetPeople";

type person = {
  name: string;
  age: string;
  url: string;
  note?: string;
};

const AddToList: React.FC<ISetPeople> = ({ people, setPeople }) => {
  const [input, setInput] = useState<person>({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };

  return (
    <form className="form">
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Image URL"
          name="url"
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Note (optional)"
          name="note"
          onChange={handleChange}
        ></textarea>
      </div>
      <button onClick={handleSubmit} type="submit">
        add user to the list
      </button>
    </form>
  );
};

export default AddToList;
