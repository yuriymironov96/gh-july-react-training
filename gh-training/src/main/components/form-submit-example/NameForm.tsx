import React, { useState } from 'react'

export interface NameFormProps {
  handleSubmit: (name: string) => void
  defaultValue: string
}

export function NameForm({ handleSubmit, defaultValue }: NameFormProps) {
  const [name, setName] = useState(defaultValue)

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function onSubmit(e: React.FormEvent) {
    alert('A name was submitted: ' + name)
    e.preventDefault()
    handleSubmit(name)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={onChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
