import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const url = "http://localhost:3000/api/task";

export default function Home(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [task, setTask] = useState({ task: "" });

  const handleChange = ({ currentTarget: input }) => {
    input.value === ""
      ? setTask({ task: "" })
      : setTask((prev) => ({ ...prev, task: input.value }));
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      if (task._id) {
        const { data } = await axios.put(url + "/" + task._id, {
          task: task.task,
        });
        const originalTasks = [...tasks];
        const index = originalTasks.findIndex((t) => t._id === task._id);
        originalTasks[index] = data.data;
        setTasks(originalTasks);
        setTask({ task: "" });
        console.log(data.message);
      } else {
        const { data } = await axios.post(url, task);
        setTasks((prev) => [...prev, data.data]);
        setTask({ task: "" });
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = (id) => {
    const currentTask = tasks.filter((task) => task._id === id);
    setTask(currentTask[0]);
  };

  const updateTask = async (id) => {
    try {
      const originalTasks = [...tasks];
      const index = originalTasks.findIndex((t) => t._id === id);
      const { data } = await axios.put(url + "/" + id, {
        completed: !originalTasks[index].completed,
      });
      originalTasks[index] = data.data;
      setTasks(originalTasks);
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const { data } = await axios.delete(url + "/" + id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>TO-DO</h1>
      <div className={styles.container}>
        <form onSubmit={addTask} className={styles.form_container}>
          <input
            className={styles.input}
            type="text"
            placeholder="Task to be done..."
            onChange={handleChange}
            value={task.task}
          />
          <button type="submit" className={styles.submit_btn}>
            {task._id ? "Update" : "Add"}
          </button>
        </form>
        {tasks.map((task) => (
          <div className={styles.task_container} key={task._id}>
            <input
              type="checkbox"
              className={styles.check_box}
              checked={task.completed}
              onChange={() => updateTask(task._id)}
            />
            <p
              className={
                task.completed
                  ? styles.task_text + " " + styles.line_through
                  : styles.task_text
              }
            >
              {task.task}
            </p>
            <button
              onClick={() => editTask(task._id)}
              className={styles.edit_task}
            >
              &#9998;
            </button>
            <button
              onClick={() => deleteTask(task._id)}
              className={styles.remove_task}
            >
              &#10006;
            </button>
          </div>
        ))}
        {tasks.length === 0 && <h2 className={styles.no_tasks}>No tasks</h2>}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(url);
  return {
    props: {
      tasks: data.data,
    },
  };
};
