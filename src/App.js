import React, { Component } from "react";
import AddNewActivity from "./components/AddNewActivity";
import ActivityList from "./components/ActivityList";
import SetWeekTargets from "./components/SetWeekTargets";
import ViewProgress from "./components/ViewProgress";
import UpdateProgress from "./components/UpdateProgress";

class App extends Component {
  state = {
    activities: [],
    targets: [],
    logs: []
  };

  componentWillMount() {
    // Temporary for test data
    const { activities, targets, logs } = this.props.data;
    this.setState({ activities, targets, logs });
  }

  addNewActivity = newActivity => {
    const { activities } = this.state;
    this.setState({ activities: [...activities, newActivity] });
  };

  addNewLog = newLog => {
    const { logs } = this.state;
    this.setState({ logs: [...logs, newLog] });
  };

  progress = () => {
    const { logs } = this.state;
    return logs.reduce(
      (acc, { activity, amount }) =>
        acc[activity]
          ? { ...acc, [activity]: acc[activity] + amount }
          : { ...acc, [activity]: amount },
      {}
    );
  };

  render() {
    const { activities, targets } = this.state;
    const progress = this.progress();
    return (
      <div className="app">
        <h1>Activity Monitor</h1>
        <AddNewActivity addNewActivity={this.addNewActivity} />
        <UpdateProgress targets={targets} addNewLog={this.addNewLog} />
        <ViewProgress targets={targets} progress={progress} />
        <SetWeekTargets activities={activities} targets={targets} />
        <ActivityList activities={activities} />
      </div>
    );
  }
}

export default App;
