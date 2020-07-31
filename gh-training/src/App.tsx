import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Hello } from './main/components/Hello'
import { Clock } from './main/components/Clock'
import { FakeAnchor } from './main/components/FakeAnchor'
import { HiddenComponent } from './main/components/HiddenComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Hello name="Sasha"></Hello>
          <Hello name="Masha"></Hello>
          <Clock></Clock>
          <FakeAnchor href="http://github.com/">
            Visit github.com (not really)
          </FakeAnchor>
          <HiddenComponent isHidden={true}></HiddenComponent>
        </div>
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
