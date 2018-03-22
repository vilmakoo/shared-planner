import React from 'react'
import { Button } from 'react-native'
import axios from 'axios'


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  constructor(props) {
    super(props)
    this.state = {
      days: [],
      mondays: [],
      tuesdays: [],
      wednesdays: [],
      thursdays: [],
      fridays: [],
      saturdays: [],
      sundays: []
    }
  }
  componentDidMount() {
    let days
    axios.get('http://192.168.10.51:3001/days')
      .then(response => {
        days = response.data

        this.setState({
          days: days,
          mondays: days.filter(day => day.weekday === 0).map(day => day.date),
          tuesdays: days.filter(day => day.weekday === 1).map(day => day.date),
          wednesdays: days.filter(day => day.weekday === 2).map(day => day.date),
          thursdays: days.filter(day => day.weekday === 3).map(day => day.date),
          fridays: days.filter(day => day.weekday === 4).map(day => day.date),
          saturdays: days.filter(day => day.weekday === 5).map(day => day.date),
          sundays: days.filter(day => day.weekday === 6).map(day => day.date)
        })

      })
      .catch(
        console.log('plää')
      )
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Button
        title='Go to Calendar'
        onPress={() => {
          navigate('Calendar', { state: this.state })
        }}
      />
    )
  }
}

export default HomeScreen