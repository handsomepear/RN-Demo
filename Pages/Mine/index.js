import React, { Component } from 'react'
import { StyleSheet, Text, Image, View,  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Header from '../Header/index'
export default class Mine extends Component {
  static navigationOptions = {
    headerTitle: 'Mine',
    tabBarLabel: '我的',
    tabBarIcon: ({tintColor}) => <Icon name='md-person' size={24} color={tintColor} />
  }
  render() {
    const { navigate } = this.props.navigation 
    return (
      <View style={styles.container}>
        <Header />
        <Text>Mine</Text>
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
