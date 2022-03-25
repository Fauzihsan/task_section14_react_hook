import React, { useState } from "react";
import deleteIcon from "../delete.png";

function Home() {
  const [activity, setActivity] = useState([
    { id: 1, title: "Mengerjakan Tugas", completed: true },
    { id: 2, title: "Mengerjakan Kuis", completed: false },
  ]);

  const handleCheckbox = (index) => {
    const newActivity = [...activity];
    newActivity[index].completed = !newActivity[index].completed;
    setActivity(newActivity);
  };
  const deleteActivity = (index) => {
    const newActivity = [...activity];
    newActivity.splice(index, 1);
    setActivity(newActivity);
  };

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addActivity(value);
    setValue("");
  };

  const addActivity = (text) => {
    const newTodos = [
      ...activity,
      { id: activity.length + 1, title: text, completed: false },
    ];
    setActivity(newTodos);
  };

  {
    return (
      <div className="container">
        <h3>TO DO LIST APP</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="inputActivity"
            />
            <button onClick={() => handleSubmit} style={{ height: "30px" }}>
              Submit
            </button>
          </form>
        </div>
        <div className="box">
          {activity.length > 0 ? (
            <>
              {activity.map((element, index) => {
                return (
                  <>
                    <div className="list" key={element.id}>
                      <input
                        type="checkbox"
                        defaultChecked={element.completed}
                        onClick={() => handleCheckbox(index)}
                        name=""
                        id=""
                      />
                      {element.completed ? (
                        <p>
                          <s style={{ color: "red" }}>{element.title}</s>
                        </p>
                      ) : (
                        <p>{element.title}</p>
                      )}
                      <button
                        onClick={() => deleteActivity(index)}
                        style={{
                          background: "transparent",
                          border: "none",
                        }}
                      >
                        <img
                          srcSet={deleteIcon}
                          alt=""
                          style={{ width: "30px" }}
                        />
                      </button>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <p>You are not having any activities at the moment</p>
              <h1> have a good rest</h1>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
