import React from 'react'
import { StyleSheet, Text, View, Alert, Button } from 'react-native'

export default class App extends React.Component {
  render() {
    console.log('moii')
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Text>äää</Text>
        <Button onPress={() => {
          Alert.alert('You tapped the button!')
        }}
          title="Tap me"
          color='green'
        />
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
})
