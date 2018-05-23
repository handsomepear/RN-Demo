import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Network extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    var that = this
    fetch('http://localhost:8082/test', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            data: data.data
          },
          function() {
            console.log(this.state)
          }
        )
      })
  }
  render() {
    if(this.state.data.length){
      this.state.data.map(item => <Text>{item.text}</Text>)
    }
    return (
      <View>
        <Button
          title="测试网络请求"
          color="blue"
          onPress={this.onButtonPress}
        />
      </View>
    )
  }
}
