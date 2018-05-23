/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import Test from './Pages/Test/index'
import BlinkApp from './Pages/Blink/index'
import Layout from './Pages/Layout/index'
import Input from './Pages/Input/index'
import ScrollPage from './Pages/Scroll/index'

import FlatListBasics from './Pages/List/FlatListBasics'
import SectionListBasics from './Pages/List/SectionListBasics'

import Network from './Pages/Network/index'
export default class HelloWorldApp extends Component {
  render() {
    // return (
    //   <ScrollView style={{marginTop: 20}}>
    //     <Test />
    //     <BlinkApp />
    //     <Layout />
    //     <Input />
    //     <ScrollPage/>
    //   </ScrollView>
    // )

    // return (
    //   <View style={{ marginTop: 20, flex: 1 }}>
    //     <View style={{ flex: 1 , marginTop: 20}}>
    //       <Text style={styles.text}>FlatList</Text>
    //       <FlatListBasics />
    //     </View>
    //     <View style={{ flex: 1 }}>
    //       <Text style={styles.text}>SectionList</Text>
    //       <SectionListBasics />
    //     </View>
    //     
    //   </View>
    // )

    return (
      <View style={{flex:1, marginTop: 20, backgroundColor: '#ccc'}}>
        <Network />
      </View>
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
