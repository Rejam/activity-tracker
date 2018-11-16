import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'

// import Views
import { Home, Targets, Activities, Activity, Report, LogActivity } from './views'

// import components
import Header from './components/Header'

const App = ({ data }) => {
  const [activities, setActivities] = useState(data.activities)
  const [targets, setTargets] = useState(data.targets)
  const [logs, setLogs] = useState(data.logs)

  const addActivity = newActivity => setActivities([newActivity, ...activities])

  const delActivity = activity =>
    setActivities(activities.filter(a => a !== activity))

  const addLog = newLog => setLogs([...logs, newLog])

  const filterTargets = activity =>
    targets.filter(target => target.activity !== activity)

  const addTarget = newTarget =>
    setTargets([filterTargets(newTarget.activity), newTarget])

  const delTarget = ({ activity }) => setTargets(filterTargets(activity))

  const progress = logs.reduce(
    (acc, { activity, amount }) =>
      acc[activity]
        ? { ...acc, [activity]: acc[activity] + amount }
        : { ...acc, [activity]: amount },
    {}
  )

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
                  addTarget={addTarget}
                  delTarget={delTarget}
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
                  addActivity={addActivity}
                  delActivity={delActivity}
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
                  <LogActivity {...props} addLog={addLog} activity={activity} />
                )
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
