import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Views
import Home from './views/Home'
import Targets from './views/Targets'
import Activities from './views/Activities'
import Report from './views/Report'
import Activity from './views/Activity'
import LogActivity from './views/LogActivity'

// import components
import Nav from './components/Nav'

class App extends Component {
  state = {
    activities: [],
    targets: [],
    logs: []
  }

  componentWillMount() {
    // Temporary for test data
    const { activities, targets, logs } = this.props.data
    this.setState({ activities, targets, logs })
  }

  resetLogs = () => this.setState({ logs: [] })

  addActivity = newActivity => {
    const { activities } = this.state
    this.setState({ activities: [...activities, newActivity] })
  }

  deleteActivity = activity => {
    console.log(activity)
    this.setState(({ activities }) => ({
      activities: activities.filter(a => a !== activity)
    }))
  }

  addLog = newLog => {
    const { logs } = this.state
    this.setState({ logs: [...logs, newLog] })
  }

  setTargets = newTargets => {
    // set new targets and reset old progress
    this.setState({ targets: newTargets, logs: [] })
  }

  progress = () => {
    const { logs } = this.state
    return logs.reduce(
      (acc, { activity, amount }) =>
        acc[activity]
          ? { ...acc, [activity]: acc[activity] + amount }
          : { ...acc, [activity]: amount },
      {}
    )
  }

  render() {
    const { targets, activities } = this.state
    const progress = this.progress()
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Home {...props} progress={progress} targets={targets} />
                )}
              />
              <Route
                path="/targets"
                render={props => (
                  <Targets
                    {...props}
                    activities={activities}
                    currentTargets={targets}
                    setTargets={this.setTargets}
                  />
                )}
              />
              <Route path="/activities" component={Activities} />
              <Route path="/report" component={Report} />
              <Route path="/activity" component={Activity} />
              <Route path="/log" component={LogActivity} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

/*
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
*/

export default App
