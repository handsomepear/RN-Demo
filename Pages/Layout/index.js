import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Layout extends Component {

  render(){
    // 默认是column竖直方向
    return (
      <View style={{height: 300, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}} />
        <View style={{flex:2, backgroundColor: 'skyblue'}} />
        <View style={{flex:3, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}