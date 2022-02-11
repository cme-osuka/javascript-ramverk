import React, { useState } from "react";
import "./App.css";

import InputBox from "./components/InputBox";
import ActivityList from "./components/ActivityList";

function App() {
  const [activities, setActivities] = useState([]);

  function addActivity(title) {
    setActivities((prevActivities) => {
      return [
        ...prevActivities,
        { id: Math.random().toString(), title: title, daysCompleted: [] },
      ];
    });
  }

  function removeActivity(id) {
    const newActivities = [...activities].filter(
      (activity) => activity.id !== id
    );
    setActivities(newActivities);
  }

  function markDayAsDone(activityId, day) {
    // Hittar den aktivitet vi vill ändra
    const currentActivity = activities.find((activity) => {
      return activity.id === activityId;
    });

    // Lägger till dagen som vi valt
    if (currentActivity.daysCompleted.includes(day)) {
      // Ta bort dagen
      currentActivity.daysCompleted = currentActivity.daysCompleted.filter(
        (d) => d !== day
      );
    } else {
      // Lägga till dagen
      currentActivity.daysCompleted.push(day);
    }

    // Skapa en ny instans av activities
    const newActivities = [...activities].map((activity) => {
      if (activity.id === activityId) {
        return currentActivity;
      } else {
        return activity;
      }
    });

    setActivities(newActivities);
  }

  return (
    <div className="App">
      <h1>Activity tracker</h1>

      <InputBox add={addActivity} />

      <ActivityList
        activities={activities}
        removeActivity={removeActivity}
        markDayAsDone={markDayAsDone}
      />
    </div>
  );
}

export default App;
