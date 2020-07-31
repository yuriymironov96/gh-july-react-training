import React, { useState } from 'react'
import { BoilingVerdict } from './BoiingVerdict'
import { TemperatureInput, ScaleNames } from './TemperatureInput'

export function Calculator() {
  const [{ temperature, scale }, setTemperatureState] = useState({
    temperature: '',
    scale: 'c',
  })

  function handleCelsiusChange(temperature: string) {
    setTemperatureState({ scale: 'c', temperature })
  }

  function handleFahrenheitChange(temperature: string) {
    setTemperatureState({ scale: 'f', temperature })
  }

  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
        scale={ScaleNames.c}
      />
      <TemperatureInput
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
        scale={ScaleNames.f}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32
}

function tryConvert(
  temperature: string,
  convert: (temperature: number) => number
) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}
