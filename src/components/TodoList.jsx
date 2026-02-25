import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    setList([...list, { text: task, done: false }]);
    setTask("");
  }

  function toggleDone(index) {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  }

  function deleteTask(index) {
    setList(list.filter((_, i) => i !== index));
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>To-Do List</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Գրիր առաջադրանք"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>+</button>
      </div>

      <ul style={styles.list}>
        {list.map((item, i) => (
          <li key={i} style={{ ...styles.listItem, textDecoration: item.done ? "line-through" : "none" }}>
            <span>{item.text}</span>
            <div>
              <button onClick={() => toggleDone(i)} style={styles.doneButton}>✔</button>
              <button onClick={() => deleteTask(i)} style={styles.deleteButton}>✖</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    background: "#fdf5e6",
    padding: "25px",
    borderRadius: "15px",
    maxWidth: "400px",
    margin: "30px auto",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  addButton: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    background: "#5D4037",
    cursor: "pointer",
    transition: "all 0.2s",
    color: "white"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  doneButton: {
    marginRight: "5px",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    background: "#4caf50",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  deleteButton: {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    background: "#f44336",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
