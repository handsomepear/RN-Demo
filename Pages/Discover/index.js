import React, { Component } from 'react'
import { StyleSheet, Text, Image, View, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Header from '../Header/index'
export default class Discover extends Component {
  constructor(props){
    super(props)
    this.renderSectionItem = this.renderSectionItem.bind(this)
  }
  static navigationOptions = {
    headerTitle: 'Discover',
    tabBarLabel: '发现',
    tabBarIcon: ({ tintColor }) => <FontAwesome name="safari" size={24} color={tintColor} />
  }

  renderSectionItem({item}){
    const circleAvatar = (item.name == '朋友圈') ? (<Image source={require('../../imgs/avatar.jpeg')} style={styles.avatar} />) : null
    return (
      <View style={styles.item}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Icon name={item.icon} size={24} style={{marginRight: 10}}/>
          <Text style={{ fontSize: 20, backgroundColor: '#fff' }}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          {circleAvatar}
          <Icon name="ios-arrow-forward" size={24} color='#ddd'/>
        </View>
      </View>
    )
  }
  
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#f8f8f8' }}>
        <Header />
        <View style={{ paddingBottom: 50 }}>
          <SectionList
            sections={[
              { title: '1', data: [{name: '朋友圈',icon: 'ios-aperture' }]},
              { title: '2', data: [{name: '扫一扫', icon: 'md-qr-scanner'}, {name: '摇一摇', icon: 'ios-heart'}]},
              { title: '3', data: [{name: '看一看', icon: 'logo-twitter'}, {name: '搜一搜', icon: 'md-barcode'}] },
              { title: '4', data: [{name: '附近的人', icon: 'ios-navigate'}]},
              { title: '5', data: [{name: '小程序', icon: 'ios-cube'}]}
            ]}
            renderItem={this.renderSectionItem}
            renderSectionHeader={({ section }) => <View style={{ height: 20, backgroundColor: '#eee' }} />}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10
  }
})
