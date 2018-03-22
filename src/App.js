import React from 'react'
import { StackNavigator } from 'react-navigation'

import Calendar from './components/Calendar'
import HomeScreen from './components/HomeScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: Calendar }
})

export default App