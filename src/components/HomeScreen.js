import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'

import { initializeDays } from '../reducers/dayReducer'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  componentDidMount() {
    this.props.initializeDays()
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Button
        title='Go to Calendar'
        onPress={() => {
          navigate('Calendar')
        }}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    navigation: props.navigation
  }
}

const mapDispatchToProps = {
  initializeDays
}

const ConnectedHomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

export default ConnectedHomeScreen