import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Hello } from './main/components/Hello'
import { Clock } from './main/components/Clock'
import { FakeAnchor } from './main/components/FakeAnchor'
import { NameFormWrapper } from './main/components/form-submit-example/NameFormWrapper'
import { MarginWrapper } from './main/components/MarginWrapper'
import { Calculator } from './main/passing-state-example/Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <MarginWrapper>
            <Hello name="Sasha"></Hello>
          </MarginWrapper>
          <MarginWrapper>
            <Hello name="Masha"></Hello>
          </MarginWrapper>
          <MarginWrapper>
            <Clock></Clock>
          </MarginWrapper>
          <MarginWrapper>
            <FakeAnchor href="http://github.com/">
              Visit github.com (not really)
            </FakeAnchor>
          </MarginWrapper>
          <MarginWrapper>
            <NameFormWrapper></NameFormWrapper>
          </MarginWrapper>
          <MarginWrapper>
            <Calculator></Calculator>
          </MarginWrapper>
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
