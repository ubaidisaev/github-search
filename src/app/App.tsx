import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import UsersSearch from 'features/usersSearch/UsersSearch'
import RepositoriesSearch from 'features/repositoriesSearch/RepositoriesSearch'
import Layout from 'components/layout/Layout'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content-area">
        <Layout>
          <Switch>
            <Route exact path="/search/users" component={UsersSearch} />
            <Route
              exact
              path="/search/repositories"
              component={RepositoriesSearch}
            />
            <Redirect to="/search/users" />
          </Switch>
        </Layout>
      </div>
    </div>
  )
}

export default App
