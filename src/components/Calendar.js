import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'
import { connect } from 'react-redux'

import Day from './Day'

class Calendar extends React.Component {
  componentWillMount() {
    this.dates = [
      [this.props.mondays[0], this.props.tuesdays[0], this.props.wednesdays[0], this.props.thursdays[0], this.props.fridays[0], this.props.saturdays[0], this.props.sundays[0]],
      [this.props.mondays[1], this.props.tuesdays[1], this.props.wednesdays[1], this.props.thursdays[1], this.props.fridays[1], this.props.saturdays[1], this.props.sundays[1]],
      [this.props.mondays[2], this.props.tuesdays[2], this.props.wednesdays[2], this.props.thursdays[2], this.props.fridays[2], this.props.saturdays[2], this.props.sundays[2]],
      [this.props.mondays[3], this.props.tuesdays[3], this.props.wednesdays[3], this.props.thursdays[3], this.props.fridays[3], this.props.saturdays[3], this.props.sundays[3]],
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

const mapStateToProps = (state) => {
  return {
    days: state.days,
    mondays: state.mondays,
    tuesdays: state.tuesdays,
    wednesdays: state.wednesdays,
    thursdays: state.thursdays,
    fridays: state.fridays,
    saturdays: state.saturdays,
    sundays: state.sundays
  }
}

const ConnectedCalendar = connect(
  mapStateToProps
)(Calendar)

export default ConnectedCalendar