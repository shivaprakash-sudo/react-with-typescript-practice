import { useState, useEffect } from "react";
import { IPerson } from "./interfaces/IPerson.js";
import { db } from "./db/db";
import List from "./components/List";
import AddToList from "./components/AddToList";
import "./App.css";

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
        <AddToList people={people} setPeople={setPeople} />
      </section>
    </main>
  );
}

export default App;
