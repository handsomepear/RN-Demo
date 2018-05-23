/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import BottomNavigator from './Pages/BottomNavigator/index'
export default class HelloWorldApp extends Component {
  render() {
    return (
      <BottomNavigator />
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    marginTop: 20,
    color: 'red'
  }
})
