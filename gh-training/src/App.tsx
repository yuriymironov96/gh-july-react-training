import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Hello } from './main/components/Hello'
import { Clock } from './main/components/Clock'
import { FakeAnchor } from './main/components/FakeAnchor'
import { NameFormWrapper } from './main/components/form-submit-example/NameFormWrapper'
import { MarginWrapper } from './main/components/MarginWrapper'
import { Calculator } from './main/components/passing-state-example/Calculator'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Simple components</Link>
              </li>
              <li>
                <Link to="/clock">Clock</Link>
              </li>
              <li>
                <Link to="/href">Href</Link>
              </li>
              <li>
                <Link to="/forms">Forms</Link>
              </li>
            </ul>
            <hr></hr>
            <Switch>
              <Route exact path="/">
                <MarginWrapper>
                  <Hello name="Sasha"></Hello>
                </MarginWrapper>
                <MarginWrapper>
                  <Hello name="Masha"></Hello>
                </MarginWrapper>
              </Route>
              <Route exact path="/clock">
                <MarginWrapper>
                  <Clock></Clock>
                </MarginWrapper>
              </Route>
              <Route exact path="/href">
                <MarginWrapper>
                  <FakeAnchor href="http://github.com/">
                    Visit github.com (not really)
                  </FakeAnchor>
                </MarginWrapper>
              </Route>
              <Route path="/forms">
                <ul>
                  <li>
                    <Link to="/forms/name">Name</Link>
                  </li>
                  <li>
                    <Link to="/forms/calc">Calculator</Link>
                  </li>
                </ul>
                <Switch>
                  <Route path="/forms/name">
                    <MarginWrapper>
                      <NameFormWrapper></NameFormWrapper>
                    </MarginWrapper>
                  </Route>
                  <Route path="/forms/calc">
                    <MarginWrapper>
                      <Calculator></Calculator>
                    </MarginWrapper>
                  </Route>
                </Switch>
              </Route>
            </Switch>
          </div>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
