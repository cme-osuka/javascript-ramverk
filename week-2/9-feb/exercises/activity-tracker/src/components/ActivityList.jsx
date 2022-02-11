import React from "react";
import Activity from "./Activity";

function ActivityList(props) {

  return (
    <div>
      {
        props.activities.map((activity) => {
          return <Activity 
                  key={activity.id}
                  data={activity} 
                  removeActivity={props.removeActivity} 
                  markDayAsDone={props.markDayAsDone}
                />
        })
      }
    </div>
  )
}

export default ActivityList;