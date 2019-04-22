import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

const Nav = lazy(() => import('./Components/UI/Nav'))
const OrginialD3 = lazy(() => import('./Components/OrginalD3'))
const GridLineMain = lazy(() => import('./Components/CirclePlots/GridD3Main'))
const GridLineMain2 = lazy(() => import('./Components/LineGraph/GridD3Main'))
const Loading = () => <div>Loading...</div>

const mainRouter = () => {
  return (
    <Router>
      <Suspense fallback={Loading}>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            //component={OrginialD3}
            render={props => (
              <OrginialD3
                header={'Original D3 example integrated with React.'}
                userSelect={{ userSelect: 'none' }}
                width={960}
                height={600}
                {...props}
              />
            )}
          />
          <Route
            path="/cicle-plots"
            render={props => (
              <GridLineMain
                header={'Circle Plots with Grid Components.'}
                userSelect={{ userSelect: 'none' }}
                width={960}
                height={600}
                {...props}
              />
            )}
          />
          <Route
            path="/line-graph"
            render={props => (
              <GridLineMain2
                header={'Line Graph with Grid Components.'}
                userSelect={{ userSelect: 'none' }}
                width={960}
                height={600}
                {...props}
              />
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default mainRouter
