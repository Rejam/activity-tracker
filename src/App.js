import React, { Component } from "react";
import AddNewActivity from "./components/AddNewActivity";
import ActivityList from "./components/ActivityList";
import SetWeekTargets from "./components/SetWeekTargets";
import ViewProgress from "./components/ViewProgress";
import ViewHistory from "./components/ViewHistory";

class App extends Component {
  state = {
    activities: [],
    currentWeekTargets: [],
    history: []
  };

  componentWillMount() {
    // Temporary for test data
    const { activities, currentWeekTargets, history } = this.props.data;
    this.setState({ activities, currentWeekTargets, history });
  }

  addNewActivity = newActivity => {
    const { activities } = this.state;
    this.setState({ activities: [...activities, newActivity] });
  };

  render() {
    const { activities, currentWeekTargets, history } = this.state;
    return (
      <div className="app">
        <h1>Activity Monitor</h1>
        <AddNewActivity addNew={this.addNewActivity} />
        <ActivityList activities={activities} />
        <SetWeekTargets activities={activities} targets={currentWeekTargets} />
        <ViewProgress targets={currentWeekTargets} />
        <ViewHistory history={history} />
      </div>
    );
  }
}

export default App;
