import React from "react";
import styles from "./activity.module.css";

function Activity(props) {
  function handleRemove() {
    const id = props.data.id;
    props.removeActivity(id);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{props.data.title}</h2>
      <div className={styles.daysContainer}>
        {Array(30)
          .fill("")
          .map((value, index) => {
            const day = index + 1;
            const isDone = props.data.daysCompleted.includes(day);

            return (
              <div
                key={props.data.id + day}
                onClick={() => {
                  props.markDayAsDone(props.data.id, day);
                }}
                className={isDone ? styles.completedDay : styles.day}
              >
                {day}
              </div>
            );
          })}
      </div>
      <button className={styles.removeButton} onClick={handleRemove}>
        x
      </button>
    </div>
  );
}

export default Activity;
