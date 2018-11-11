import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'

// import Views
import Home from './views/Home'
import Targets from './views/Targets'
import Activities from './views/Activities'
import Report from './views/Report'
import Activity from './views/Activity'
import LogActivity from './views/LogActivity'

// import components
import Header from './components/Header'

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

  addActivity = newActivity => {
    const { activities } = this.state
    this.setState({ activities: [newActivity, ...activities] })
  }

  delActivity = activity => {
    console.log(activity)
    this.setState(({ activities }) => ({
      activities: activities.filter(a => a !== activity)
    }))
  }

  addLog = newLog => {
    this.setState(({ logs }) => ({ logs: [...logs, newLog] }))
  }

  addTarget = newTarget => {
    this.setState({
      targets: [...this.filterTargets(newTarget.activity), newTarget]
    })
  }

  delTarget = ({ activity }) => {
    this.setState({
      targets: this.filterTargets(activity)
    })
  }

  filterTargets = activity =>
    this.state.targets.filter(target => target.activity !== activity)

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
    const { targets, activities, logs } = this.state
    const progress = this.progress()
    return (
      <div className="container" style={{ padding: '1em', maxWidth: '600px' }}>
        <BrowserRouter>
          <div className="app">
            <Header />
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
                    targets={targets}
                    addTarget={this.addTarget}
                    delTarget={this.delTarget}
                  />
                )}
              />
              <Route
                exact
                path="/activities"
                render={props => (
                  <Activities
                    {...props}
                    activities={activities}
                    addActivity={this.addActivity}
                    delActivity={this.delActivity}
                  />
                )}
              />
              <Route path="/report" component={Report} />
              <Route
                path="/activities/:activity"
                render={props => {
                  const { activity } = props.match.params
                  const log = logs.filter(a => a.activity === activity)
                  return <Activity {...props} activity={activity} log={log} />
                }}
              />
              <Route
                path="/log/:activity"
                render={props => {
                  const { activity } = props.match.params
                  return (
                    <LogActivity
                      {...props}
                      addLog={this.addLog}
                      activity={activity}
                    />
                  )
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
