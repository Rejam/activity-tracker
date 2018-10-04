import React, { Component } from "react";
import AddActivity from "./components/AddActivity";
import ActivityList from "./components/ActivityList";
import SetTargets from "./components/SetTargets";
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

  addActivity = newActivity => {
    const { activities } = this.state;
    this.setState({ activities: [...activities, newActivity] });
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
        <AddActivity addActivity={this.addActivity} />
        <UpdateProgress targets={targets} addLog={this.addLog} />
        <ViewProgress targets={targets} progress={progress} />
        <SetTargets
          activities={activities}
          currentTargets={targets}
          setTargets={this.setTargets}
        />
        <ActivityList activities={activities} />
      </div>
    );
  }
}

export default App;
