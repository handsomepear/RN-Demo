import React, { Component } from 'react'
import { StyleSheet, Text, Image, View,  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Header from '../Header/index'
export default class Discover extends Component {
  static navigationOptions = {
    headerTitle: 'Discover',
    tabBarLabel: '发现',
    tabBarIcon: ({tintColor}) => <FontAwesome name='safari' size={24} color={tintColor} />
  }
  render() {
    const { navigate } = this.props.navigation 
    return (
      <View style={styles.container}>
        <Header />
        <Text>Discover</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
