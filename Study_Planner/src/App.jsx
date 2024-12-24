import { useState } from "react";
import "./App.css";
import Subject_Card from "./components/subjects/subject";

function App() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState([]);
  const [newHours, setNewHours] = useState("");

  let savedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
  if (savedSubjects.length > 0 && subjects.length === 0) {
    setSubjects(savedSubjects);
  }

  function addSubjects() {
    if (newSubject && newHours) {
      let subjectsUpdated = [
        ...subjects,
        { subject: newSubject, hours: parseInt(newHours) },
      ];
      setSubjects(subjectsUpdated);
      setNewSubject("");
      setNewHours("");

      localStorage.setItem("subjects", JSON.stringify(subjectsUpdated));
    } else {
      alert("First enter a subject");
    }
  }

  function increaseHours(idx) {
    const updatedSubjects = [...subjects];
    updatedSubjects[idx].hours += 1;
    setSubjects(updatedSubjects);
    // Update local storage
    localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
  }

  function decreaseHours(idx) {
    const updatedSubjects = [...subjects];
    if (updatedSubjects[idx].hours > 0) {
      updatedSubjects[idx].hours -= 1;
      setSubjects(updatedSubjects);

      // Update local storage
      localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
    }
  }

  return (
    <>
      <div className="container">
        <h1>Geekster Study Planner</h1>
        <div className="planner_box">
          <input
            onChange={(e) => {
              setNewSubject(e.target.value.toUpperCase());
            }}
            value={newSubject}
            id="subjects"
            placeholder="Subject"
            type="text"
          />
          <input
            onChange={(e) => {
              setNewHours(e.target.value.toUpperCase());
            }}
            value={newHours}
            id="hours"
            placeholder="Hours"
            type="number"
          />
          <button onClick={addSubjects} className="add">
            Add
          </button>
        </div>
        <div className="storedSubjects">
        {subjects.map((sub, index) => {
          return (
            <Subject_Card
              key={index}
              idx={index}
              subject={sub.subject}
              hours={sub.hours}
              increaseHours={increaseHours}
              decreaseHours={decreaseHours}
            ></Subject_Card>
          );
        })}
        </div>
        
      </div>
    </>
  );
}

export default App;
