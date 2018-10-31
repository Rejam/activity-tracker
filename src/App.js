import React, { Component } from "react";
import AddActivity from "./components/AddActivity";
import ActivityList from "./components/ActivityList";
import SetTargets from "./components/SetTargets";
import Tracker from "./components/Tracker";
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

  resetLogs = () => this.setState({ logs: [] });

  addActivity = newActivity => {
    const { activities } = this.state;
    this.setState({ activities: [...activities, newActivity] });
  };

  deleteActivity = activity => {
    console.log(activity);
    this.setState(({ activities }) => ({
      activities: activities.filter(a => a !== activity)
    }));
  };

  addLog = newLog => {
    const { logs } = this.state;
    this.setState({ logs: [...logs, newLog] });
  };

  setTargets = newTargets => {
    // set new targets and reset old progress
    this.setState({ targets: newTargets, logs: [] });
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
        <Tracker targets={targets} progress={progress} />
        <UpdateProgress targets={targets} addLog={this.addLog} />
        <AddActivity addActivity={this.addActivity} />
        <SetTargets
          activities={activities}
          currentTargets={targets}
          setTargets={this.setTargets}
        />
        <ActivityList
          activities={activities}
          deleteActivity={this.deleteActivity}
        />
        <button onClick={this.resetLogs}>Reset</button>
      </div>
    );
  }
}

export default App;
