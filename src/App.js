import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'

// import Views
import { Home, Targets, Activities, Activity, Report, LogActivity } from './views'

// import components
import {Header, ActivityForm} from './components'

const App = ({ data }) => {
  const [activities, setActivities] = useState(data.activities)
  const [targets, setTargets] = useState(data.targets)
  const [logs, setLogs] = useState(data.logs)

  const addActivity = newActivity => setActivities([newActivity, ...activities])

  const delActivity = (activity) =>
    setActivities(activities.filter(a => a !== activity))

  const addLog = newLog => setLogs([...logs, newLog])

  const addTarget = target =>
    setTargets([
      target, 
      ...targets.filter(t => t.activity !== target.activity)
    ])

  const delTarget = id => setTargets(targets.filter(t => t.id !== id))

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
                  <LogActivity {...props}>
                    <ActivityForm
                      {...props}
                      log={addLog}
                      activity={activity}
                      logDate={new Date()}
                      />
                  </LogActivity>
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
