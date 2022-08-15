import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import { IPerson } from "./interfaces/Person.js";

const db: IPerson = {
  people: [
    {
      name: "Shiva",
      age: 25,
      url: "photo/url",
      note: "Wow!",
    },
    {
      name: "Nik",
      age: 20,
      url: "photo/url",
      note: "such nice",
    },
    {
      name: "Jay",
      age: 27,
      url: "photo/url",
      note: "much nice.",
    },
    {
      name: "Chub",
      age: 25,
      url: "photo/url",
      note: "Wow! such nice, much nice.",
    },
  ],
};

function App() {
  const [people, setPeople] = useState<IPerson["people"]>([]);
  useEffect(() => {
    setPeople(db.people);
  }, []);
  return (
    <main>
      <section className="container">
        <h1>People Invited to my Party</h1>
        <List people={people} />
      </section>
    </main>
  );
}

export default App;
