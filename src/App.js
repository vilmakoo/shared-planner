import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import Calendar from './components/Calendar'
import HomeScreen from './components/HomeScreen'
import store from './store'

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: Calendar }
})

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}

export default function NCAP() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}