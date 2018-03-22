import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

import Day from './Day'

class Calendar extends React.Component {
  componentWillMount() {
    this.days = this.props.navigation.state.params.state
    this.dates = [
      [this.days.mondays[0], this.days.tuesdays[0], this.days.wednesdays[0], this.days.thursdays[0], this.days.fridays[0], this.days.saturdays[0], this.days.sundays[0]],
      [this.days.mondays[1], this.days.tuesdays[1], this.days.wednesdays[1], this.days.thursdays[1], this.days.fridays[1], this.days.saturdays[1], this.days.sundays[1]],
      [this.days.mondays[2], this.days.tuesdays[2], this.days.wednesdays[2], this.days.thursdays[2], this.days.fridays[2], this.days.saturdays[2], this.days.sundays[2]],
      [this.days.mondays[3], this.days.tuesdays[3], this.days.wednesdays[3], this.days.thursdays[3], this.days.fridays[3], this.days.saturdays[3], this.days.sundays[3]],
      // [this.days.mondays[4], this.days.tuesdays[4], this.days.wednesdays[0], this.days.thursdays[0], this.days.fridays[0], this.days.saturdays[0], this.days.sundays[0]],
    ]
  }

  headerRow = [
    <Day key='mon' dayName='monday' />,
    <Day key='tue' dayName='tuesday' />,
    <Day key='wed' dayName='wednesday' />,
    <Day key='thu' dayName='thursday' />,
    <Day key='fri' dayName='friday' />,
    <Day key='sat' dayName='saturday' />,
    <Day key='sun' dayName='sunday' />
  ]

  render() {
    console.log(this.props.navigation.state.params.state)
    return (
      <View style={styles.container} >
        <Text>Calendar</Text>

        <Table style={styles.table}>
          <Row data={this.headerRow} style={styles.head} textStyle={styles.text} />
          <Rows data={this.dates} style={styles.row} textStyle={styles.text} />
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: { width: 350 },
  head: { height: 40 },
  text: { marginLeft: 5 },
  row: { height: 30 }
})

export default Calendar