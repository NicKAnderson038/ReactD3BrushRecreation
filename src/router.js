import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

const Nav = lazy(() => import('./Components/UI/Nav'))
const OrginialD3 = lazy(() => import('./Components/OrginalD3'))
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
            render={props => <OrginialD3 header={'Original D3'} {...props} />}
          />
          <Route
            path="/grid-components"
            render={props => (
              <OrginialD3 header={'Grid Components'} {...props} />
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default mainRouter
