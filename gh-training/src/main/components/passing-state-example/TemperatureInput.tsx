import React from 'react'

export enum ScaleNames {
  c = 'Celsius',
  f = 'Fahrenheit',
}

export interface TemperatureInputProps {
  scale: ScaleNames
  temperature: string
  onTemperatureChange: (temperature: string) => void
}

export function TemperatureInput(props: TemperatureInputProps) {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onTemperatureChange(event.target.value)
  }

  return (
    <fieldset>
      <legend>Enter temperature in {props.scale}:</legend>
      <input value={props.temperature} onChange={onChange} />
    </fieldset>
  )
}
