import React from "react";
import { IPerson } from "../interfaces/IPerson.js";

const List: React.FC<IPerson> = ({ people }) => {
  const renderListElement = (): JSX.Element[] => {
    return people.map((person, index) => (
      <li key={index} className="flex">
        <div className="user__container flex">
          <img src={person.url} alt="Avatar" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old.</p>
        <p>{person.note}</p>
      </li>
    ));
  };
  return <ul className="users__container">{renderListElement()}</ul>;
};

export default List;
