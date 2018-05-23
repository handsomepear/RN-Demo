import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Greeting extends Component {
  constructor(){
    super()
  }
  render() {
    var name = this.props.name
    return <Text>Hello {name}!</Text>
  }
}

export default class LotsOfGreetings extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
      </View>
    )
  }
}
