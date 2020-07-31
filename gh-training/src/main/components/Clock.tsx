import React from 'react'

// interface ClockProps {
//   date: Date;
// }

interface ClockState {
  date: Date
}

// export function Clock(props: ClockProps) {
//   return (
//     <>
//       <div>What time is it?</div>
//       <div>It is {props.date.toLocaleTimeString()}!</div>
//     </>
//   );
// }

export class Clock extends React.Component<{}, ClockState> {
  timerID?: any // setInterval returns NodeJS.Timeout type, clearInterval() accepts number type
  classProperty = 'TS methods are bound by default.'

  componentWillMount() {
    this.setState({ date: new Date() })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  // this is public class syntax, it allows to use class properties in methods without ".bind(this)"
  clickLogger = () => {
    console.log(this.classProperty)
  }

  render() {
    return (
      <>
        <div onClick={this.clickLogger}>
          What time is it? By the way, click me!
        </div>
        <div>
          It is <FormattedDate date={this.state.date} />!
        </div>
      </>
    )
  }
}

interface FormattedDateProps {
  date: Date
}

function FormattedDate(props: FormattedDateProps) {
  return <span>{props.date.toLocaleTimeString()}</span>
}
