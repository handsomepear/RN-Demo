import React, {Component} from 'react'

import {View, Text, StyleSheet} from 'react-native'

import blink from './style'


class Blink extends Component {
  constructor(props){
    super(props)
    this.state = {showText : true}
    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText}
      })
    }, 1000)
  }

  render(){
    let display = this.state.showText ? this.props.text : ' '
    return (
      <Text style={blink.text}>{display}</Text>
    )
  }
}

export default class BlinkApp extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes, blinking is so great' />
        <Blink text='Why did they ever take this  out of HTML' />
      </View>
    )
  }
}
