import React, { Component } from 'react'
import { StyleSheet, Text, Image, View, SectionList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Header from '../Header/index'
export default class AddressBook extends Component {
  static navigationOptions = {
    headerTitle: 'AddressBook',
    tabBarLabel: '通信录',
    tabBarIcon: ({ tintColor }) => <FontAwesome name="address-card" size={24} color={tintColor} />
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header />
        <View style={styles.container}>
          <SectionList
            sections={[
              { title: 'A', data: ['Amy'] },
              { title: 'B', data: ['Bob', 'Bo1', 'Bo2', 'Bo3'] },
              { title: 'D', data: ['Denny', 'Denny1', 'Denny2', 'Denny3', 'Denny4', 'Denny5', 'Denny6'] },
              { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] }
            ]}
            renderItem={({ item }) => {
              return (
                <View style={styles.addressItem}>
                  <View>
                    <Image source={require('../../imgs/avatar.jpeg')} style={styles.avatar} />
                  </View>
                  <Text style={styles.item}>{item}</Text>
                </View>
              )
            }}
            renderSectionHeader={({ section }) => (
              <View>
                <Text style={{ backgroundColor: '#eee', paddingLeft: 10, paddingRight: 10 }}>{section.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  addressItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#eee'
  }
})
