import React, { useState } from "react";
import "./App.css";

import InputBox from "./components/InputBox";

function App() {
  const [inputText, setInputText] = useState("");
  const [activities, setActivities] = useState([]);

  function createActivity() {
    const newActivity = {
      title: inputText,
      daysCompleted: []
    }

    setActivities((prevActivities) => {
      return [...prevActivities, newActivity]
    })
  }

  /* 
   WORK IN PROGRESS
   EJ FÄRDIGT

  function completeDay(activityName, day) {
    const currentActivity = activities.find((activity) => {
      return activity.title === activityName
    });

    if (currentActivity) {
      currentActivity.daysCompleted.push({
        day: day
      })
    }
  }

  completeDay("Koda", 23);*/

  return (
    <div className="App">
      <InputBox
        inputText={inputText}
        setInputText={setInputText}
        createActivity={createActivity}
      />
    </div>
  );
}

export default App;
