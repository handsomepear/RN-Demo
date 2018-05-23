import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'

export default class Header extends Component {
  render(){
    return (
      <View style={{height: 50, backgroundColor: '#242529', padding: 10}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style={{color: '#fff', fontSize: 18}}>微信</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text><Icon name='md-add' size={30} color='#fff'/></Text>
          </View>
        </View>
      </View>
    )
  }
}